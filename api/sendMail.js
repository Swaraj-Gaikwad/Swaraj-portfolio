import nodemailer from 'nodemailer'

// Vercel Serverless Function handler for sending contact emails via Gmail SMTP
// Endpoint: POST /api/sendMail
// Request body: { name: string, email: string, message: string }
// Env variables required: EMAIL_USER, EMAIL_PASS

export default async function handler (req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { name, email, message, phone } = req.body || {}

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' })
    }

    // Ensure environment variables are present
    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS

    if (!user || !pass) {
      return res.status(500).json({ error: 'Email configuration not found on server' })
    }

    // Create a nodemailer transporter using Gmail SMTP
    // NOTE: For Gmail, use an App Password (recommended) or OAuth2.
    // If using an App Password, set EMAIL_USER to your Gmail address and EMAIL_PASS to the generated app password.
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use TLS
      auth: {
        user,
        pass
      }
    })

    // Setup email data
    const mailOptions = {
      from: user, // Must be the authenticated user when using Gmail SMTP
      replyTo: email, // So replies go to the visitor's email
      to: user, // Send to owner's email
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\n\nMessage:\n${message}`,
      html: `<div style="font-family: Helvetica, Arial, sans-serif; color: #111">
              <h2>New Portfolio Contact</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
              <hr />
              <p>${message.replace(/\n/g, '<br/>')}</p>
            </div>`
    }

    // Send mail
    const info = await transporter.sendMail(mailOptions)

    // Return success with message id
    return res.status(200).json({ ok: true, messageId: info.messageId })
  } catch (err) {
    console.error('Error sending email:', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
