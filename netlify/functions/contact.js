import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import serverless from 'serverless-http';

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'https://tomaslajda.netlify.app', // Replace with your frontend's origin
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.static('public'));
app.use(express.json());

const __directname = path.resolve();

app.get('/', (req, res) => {
  res.sendFile(path.join(__directname, 'public', 'contact.html'));
});

app.post('/contact', (req, res) => {
  console.log(req.body);

  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res
      .status(400)
      .json({ status: 'error', message: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${firstName} ${lastName}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res
        .status(500)
        .json({ status: 'error', message: 'Failed to send email.' });
    } else {
      return res
        .status(200)
        .json({ status: 'success', message: 'Form submitted successfully' });
    }
  });
});

export default serverless(app);
