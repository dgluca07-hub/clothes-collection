const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configura il trasporto email (usa una tua email Gmail per test)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'clothes.collection.2cc@gmail.com',
    pass: 'yqjj knxh oxeb vtfb', 
  },
});


app.post('/send-code', async (req, res) => {
  const { email } = req.body;
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();

  try {
    await transporter.sendMail({
      from: 'clothes.collection.2cc@gmail.com',
      to: email,
      subject: 'Il tuo codice di accesso',
      text: `Il tuo codice è: ${code}`,
    });
    res.json({ success: true, code });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server backend avviato su http://localhost:3001');
});
