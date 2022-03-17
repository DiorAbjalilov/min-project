const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.ru",
    port: 2525,
    secure: false,
    auth: {
      user: "abjalilov.diyor@mail.ru",
      pass: "Salom#123",
    },
  },
  {
    from: "Nodemailer from site<support@abjalilov.diyor@mail.ru>",
  }
);
const sendEmail = (message) => {
  console.log("sss");
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email is sent", info);
  });
};
module.exports = sendEmail;
