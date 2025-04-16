const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/send-email', async (req, res) => {
    try {
        const formData = {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_USER_ID,
            template_params: req.body
        };

        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', formData, {
            headers: { 'Content-Type': 'application/json' }
        });

        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
