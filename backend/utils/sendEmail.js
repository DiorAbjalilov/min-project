const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(
  {
    host: "smtp.yandex.ru",
    port: 465,
    auth: {
      user: "test.2017@internet.ru",
      pass: "w9MJTm66RjD25k6LXc9r",
    },
  },
  {
    from: "Nodemailer from site<support@test.2017@internet.ru>",
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
