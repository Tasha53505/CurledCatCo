import Mailgun from "mailgun.js"
import formData from "form-data"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Please fill out all fields." })
  }

  try {
    const mailgun = new Mailgun(formData)

    const client = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    })

    await client.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Website Contact <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: ["curledcatco@gmail.com"],
      subject,
      text: `Name: ${name}
Email: ${email}

${message}`,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "Failed to send message." })
  }
}