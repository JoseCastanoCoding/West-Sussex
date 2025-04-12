require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5500;
const upload = multer();

app.use(cors({
  origin: 'http://localhost:5500' // or whatever your frontend runs on
}));
app.get('/ping', (req, res) => {
  res.send('pong');
});
app.use(express.urlencoded({ extended: true }));

// Route to accept formData from frontend
app.post('/send-form', upload.none(), async (req, res) => {
  const formData = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_USER_ID,
    template_params: {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      const errorText = await response.text();
      res.status(500).json({ success: false, error: errorText });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
