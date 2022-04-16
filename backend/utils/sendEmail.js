const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(
  {
    host: "smtp.mail.ru",
    port: 2525,
    auth: {
      user: "abjalilov.diyor@mail.ru",
      pass: "UeeJSc5gm1nFckASBBYh",
    },
  },
  {
    from: "Nodemailer from site<abjalilov.diyor@mail.ru>",
  }
);
const sendEmail = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email is sent", info);
  });
};
module.exports = sendEmail;
