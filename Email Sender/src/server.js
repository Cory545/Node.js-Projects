//import modules
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import express from "express";
import env from "dotenv";
import ejs from "ejs";

const app = express();
const port = 3000;

// Enabling express, body parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs")
});

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'process.env.PRIVATE_EMAIL',
        pass: 'process.env.PRIVATE_PASSWORD' 
    }
});

app.post('/send_email', (req, res) => {
    const { subject, message } = req.body;

    const mailOptions = {
        from: 'process.env.PRIVATE_EMAIL',
        to: 'process.env.PRIVATE_EMAIL',
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });
});
app.listen(port, () => {
    console.log(`Server   
 listening on port ${port}`);
});