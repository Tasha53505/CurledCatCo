export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" }
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body)

    const domain = process.env.MAILGUN_DOMAIN
    const apiKey = process.env.MAILGUN_API_KEY

    const form = new URLSearchParams()
    form.append("from", `Website Contact <postmaster@${domain}>`)
    form.append("to", "curledcatco@gmail.com")
    form.append("subject", subject)
    form.append(
      "text",
      `Name: ${name}
Email: ${email}

${message}`
    )

    const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`api:${apiKey}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(text)
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }
  }catch (err) {
  console.error(err)

  return {
    statusCode: 500,
    body: JSON.stringify({ error: err.message }),
  }
}

}
