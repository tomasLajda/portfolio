import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import serverless from 'serverless-http';

dotenv.config();

const app = express();

app.use(express.json());

interface ContactRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  subject: string;
}

app.post('/.netlify/functions/contact', (req: Request, res: Response) => {
  console.log(req.body);

  const { firstName, lastName, email, message, subject }: ContactRequestBody =
    req.body;

  if (!firstName || !lastName || !email || !message || !subject) {
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
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res
        .status(500)
        .json({ status: 'error', message: error.toString() });
    }
    res.status(200).json({ status: 'success', message: 'Email sent' });
  });
});

export const handler = serverless(app);
