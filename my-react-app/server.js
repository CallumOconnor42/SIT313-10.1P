
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;


app.use(express.json());
app.use(cors()); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'callumoconnor15801@gmail.com',
    pass: '', 
  },
});


app.post('/send-email', (req, res) => {
  const { email } = req.body; 

  
  const mailOptions = {
    from: 'callumoconnor15801@gmail.com',
    to: email, 
    subject: 'Thank you for subscribing!',
    text: 'You are now subscribed to our Daily Insider updates!',
  };

 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});