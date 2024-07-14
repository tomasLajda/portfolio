import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

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
    subject: `Message from ${firstName} ${lastName} ${email}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('error');
      res.status(500).json({ status: 'error' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ status: 'success' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
