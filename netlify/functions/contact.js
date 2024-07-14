import express, { Express, Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import * as path from 'path';
import serverless from 'serverless-http';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: 'https://tomaslajda.netlify.app', // Replace with your frontend's origin
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.static('public'));
app.use(express.json());

app.get('/', (res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.post('/contact', (req: Request, res: Response) => {
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

  transporter.sendMail(mailOptions, (error: any, info: any) => {
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

module.exports.handler = serverless(app);
