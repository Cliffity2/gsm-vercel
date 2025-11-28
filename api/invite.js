// api/invite.js
// This is ONLY for Vercel, not your Expo app.

export default function handler(req, res) {
  // Vercel gives us query params like ?token=...&societyId=...
  const { token, societyId } = req.query || {};

  if (!token || !societyId) {
    res.status(400).send("Missing token or societyId in the URL.");
    return;
  }

  // Build the deep link that your GSM app already understands
  const deepLink = `gsmapp://invite?token=${encodeURIComponent(
    token
  )}&societyId=${encodeURIComponent(societyId)}`;

  // Redirect the browser straight into your app
  res.writeHead(302, { Location: deepLink });
  res.end();
}
