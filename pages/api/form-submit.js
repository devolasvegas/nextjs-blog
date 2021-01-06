export default function handler(req, res) {
  const name = req.body.name;
  res.status(200).json({ text: `Hello, ${name}!` });
}
