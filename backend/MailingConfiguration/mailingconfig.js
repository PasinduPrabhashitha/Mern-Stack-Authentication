import nodemailer from "nodemailer";

export const sendRegistrationEmail = async (name) => {
  const message = `
    <h3> Hey ${name},  </h3>
    <p> You have successfully registered with our application. Thanks for registering. </p>    
    `;

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      //To send emails from localhost
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: "",
    to: "",
    subject: "",
    text: "",
    html: message,
  });

  console.log("Message sent: %s", info.messageId);
};
