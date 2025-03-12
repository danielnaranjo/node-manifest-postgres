const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER || "sandbox.smtp.mailtrap.io",
    port: process.env.SMTP_PORT || 2525,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.SMTP_USERNAME || "6b8e3472bc1734",
        pass: process.env.SMTP_PASSWORD || "8a8209bbf4e0eb"
    },
});
module.exports = async (req, res) => {
    console.log('Sending email...', JSON.stringify(req.body));

    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
        to: req.body.email || "daniel@ultimoenlaweb.com",
        subject: "Hello ✔", 
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
}
