import nodemailer from 'nodemailer';

//creamos el transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',//'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other port,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        // do not fail on ivalid certs
        rejectUnauthorized: false,
    },
});

type emailParams = {
    to: string
    subject: string
    html: string
}

const sendEmail =async ({to, subject, html}: emailParams) => {
    try {
        const result = await transporter.sendMail({
            from: `Company <ferreiradelacruz@gmail.com>`, //sender address
            to, // list of receivers
            subject, // subject line
            html, //html body
        });
        console.log({result});
        return { ok: true, message: "Excelente, mail enviado con éxito!" }        
    } catch (error) {
        console.log(error);
        return {
            of: false,
            message: "hubo un error al enviar el email",
            err: error,
        }        
    }
}

export default sendEmail;
