const nodemailer = require("nodemailer")

exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body)
  const { name, email } = data.data
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "vucomarija00@gmail.com",
      pass: process.env.REACT_APP_EMAIL_PASS,
    },
  })

  transporter.sendMail(
    {
      from: `${name} ${email}`,
      to: "marijavucof1@gmail.com",
      subject: `${name} wants to hire us`,
      html: `<div>  
    <div><b>Who?</b> ${name} </div>
     <p> <b>Project details:</b>  </p>
    	<div>
            <p> <b>Contact:</b> </p>
            <p> <b>E-mail:</b> ${email}</p>
        </div>
       
    </div>`,
    },
    function (error, info) {
      if (error) {
        callback(error)
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: "success",
          }),
        })
      }
    }
  )
}
