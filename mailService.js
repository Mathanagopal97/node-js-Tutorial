var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'backupphotosforgopal',
      pass: 'UsaS8v6WiVbjT6e'
    }
  });
  
  var mailOptions = {
    from: 'backupphotosforgopal@gmail.com',
    to: 'mathug123@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });