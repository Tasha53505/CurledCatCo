import Mailgun from "mailgun.js"
import formData from "form-data"

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" }
  }

  const { name, email, subject, message } = JSON.parse(event.body)

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

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }
}