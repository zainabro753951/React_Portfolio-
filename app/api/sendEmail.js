// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Test account create karna using Ethereal
    let testAccount = await nodemailer.createTestAccount();

    // Transporter object create karo Ethereal SMTP settings ke sath
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: email,
      to: "your-email@example.com", // Your email address
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res
        .status(200)
        .json({
          message: "Email sent successfully",
          previewURL: nodemailer.getTestMessageUrl(info),
        });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
