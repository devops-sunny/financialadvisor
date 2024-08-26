const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

exports.sendLoginEmail = async (toEmail, data ,file ,subject) => {
    try {
        const templatePath = path.join(__dirname, 'template', file);
        const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');
        const template = handlebars.compile(htmlTemplate);
        const htmlToSend = template(data);
        const mailOptions = {
            from: '"Your Company Name" <your-email@gmail.com>',
            to: toEmail,
            subject:subject,
            html: htmlToSend
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};



// const data = {
//     userName: 'John Doe',
//     loginTime: 'August 26, 2024 10:30 AM',
//     device: 'Chrome on Windows 10',
//     location: 'New York, USA'
// };
// sendLoginEmail('recipient@example.com', data,loginmail.html,"subject");
