export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const mailgunApiKey = process.env.MAILGUN_API_KEY
  const mailgunDomain = process.env.MAILGUN_DOMAIN
  const recipient = process.env.CONTACT_RECIPIENT || 'curledcatco@gmail.com'

  if (!mailgunApiKey || !mailgunDomain) {
    return res.status(500).json({ error: 'Mailgun is not configured' })
  }

  const form = new URLSearchParams()
  form.append('from', `${name} <${email}>`)
  form.append('to', recipient)
  form.append('subject', subject)
  form.append('text', message)

  try {
    const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Mailgun error', response.status, errorText)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Mailgun request failed', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
