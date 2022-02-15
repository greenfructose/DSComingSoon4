// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
    try {
        await sgMail.send({
            to: 'info@rokeservices.com', // Change to your recipient
            from: 'rokeservices00@gmail.com', // Change to your verified sender
            subject: 'Roke Services Subscribers',
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title>Roke Services</title>
                  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
                </head>
                    
                <body>
                  <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
                    <div class="container" style="margin-left: 20px; margin-right: 20px;">
                      <h3>You've got a new mail from ${req.body.email}</h3>
                      <p class="footer" style="font-size: 14px; padding-bottom: 20px; border-bottom: 1px solid #D1D5DB;">
                          Regards<br>
                          Roke Services<br>
                      </p>
                      <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                        <a href="#" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                        <a href="https://github.com/robert-otieno" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                        <a href="https://www.linkedin.com/in/robert-otieno-9b2b42174/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                    </div>
                  </div>
                </body>
              </html>`,
        })
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "" });
}

export default sendEmail;