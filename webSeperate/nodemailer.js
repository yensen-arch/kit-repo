const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465, // or 587 for TLS
  secure: true, // use SSL
  auth: {
    user: 'swca.support@iadabaddi.com', // your custom email address
    pass: 'Es67@Iand', // your email password
  },
});

let mailOptions = {
  from: 'swca.support@iadabaddi.com',
  to: 'officialdevain25@gmail.com',
  subject: 'Test Email',
  text: 'Hello from node Hostinger!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
