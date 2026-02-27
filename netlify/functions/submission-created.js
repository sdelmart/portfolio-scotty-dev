const RESEND_API_URL = 'https://api.resend.com/emails';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getField(data, key, fallback = '—') {
  const raw = data?.[key];
  if (raw === undefined || raw === null || String(raw).trim() === '') {
    return fallback;
  }
  return String(raw).trim();
}

exports.handler = async (event) => {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FORM_NOTIFICATION_TO;
  const from = process.env.FORM_NOTIFICATION_FROM || 'Portfolio Scotty <onboarding@resend.dev>';

  if (!apiKey || !to) {
    console.error('Missing env vars: RESEND_API_KEY and/or FORM_NOTIFICATION_TO');
    return {
      statusCode: 500,
      body: 'Missing required environment variables.'
    };
  }

  let parsed;
  try {
    parsed = JSON.parse(event.body || '{}');
  } catch (error) {
    console.error('Invalid JSON payload', error);
    return {
      statusCode: 400,
      body: 'Invalid event payload.'
    };
  }

  const payload = parsed?.payload || {};
  const data = payload?.data || {};

  const nom = getField(data, 'nom');
  const email = getField(data, 'email');
  const objet = getField(data, 'objet');
  const message = getField(data, 'message');
  const source = getField(data, 'source', 'portfolio-home');

  const subject = `Nouveau message portfolio — ${objet}`;

  const text = [
    'Nouveau message reçu depuis le formulaire portfolio.',
    '',
    `Nom: ${nom}`,
    `Email: ${email}`,
    `Objet: ${objet}`,
    `Source: ${source}`,
    '',
    'Message:',
    message,
    '',
    `Formulaire: ${payload?.form_name || 'contact'}`,
    `Soumis le: ${new Date().toISOString()}`
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.55; color: #111;">
      <h2 style="margin:0 0 12px;">Nouveau message portfolio</h2>
      <p style="margin:0 0 16px;">Une nouvelle soumission vient d'arriver depuis ton formulaire Netlify.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tr><td style="padding:6px 0; font-weight:700;">Nom</td><td style="padding:6px 0;">${escapeHtml(nom)}</td></tr>
        <tr><td style="padding:6px 0; font-weight:700;">Email</td><td style="padding:6px 0;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:6px 0; font-weight:700;">Objet</td><td style="padding:6px 0;">${escapeHtml(objet)}</td></tr>
        <tr><td style="padding:6px 0; font-weight:700;">Source</td><td style="padding:6px 0;">${escapeHtml(source)}</td></tr>
      </table>
      <div style="margin-top: 16px; padding: 12px; border-radius: 8px; background: #f6f8fa; white-space: pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `;

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email !== '—' ? email : undefined,
      subject,
      text,
      html
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Resend API error', response.status, errorBody);
    return {
      statusCode: 502,
      body: 'Failed to send notification email.'
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};
