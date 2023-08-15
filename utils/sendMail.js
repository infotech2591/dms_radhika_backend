const nodemailer = require("nodemailer")
const dotenv = require("dotenv").config()

//create function for mail sending
exports.emailSend = (to, Subject, Description) => {
    return new Promise((resolve, reject) => {
        try {
            const response = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASS_KEY
                },
                port: 465,
                host: 'smtp.gmail.com',

            }).sendMail(
                {
                    from: process.env.EMAIL,
                     to: to,
                    subject: Subject,
                    text: Description,
                }, (err) => {
                    if (err) {
                        throw new Error(err);

                    } else {
                        console.log("mail sent");
                        resolve(response)

                    }
                }

            )

        } catch (error) {
            reject(err)
        }
    })


}


