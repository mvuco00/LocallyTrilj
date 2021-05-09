//const nodemailer = require("nodemailer")
/*
exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body)
  const { name, email } = data.data
  const transporter = nodemailer.createTransport({
    service: "SendGrid",

    auth: {
      user: "marijavucof1@gmail.com",
      pass: process.env.REACT_APP_SENDGRID_PASS,
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

*/

const nodemailer = require("nodemailer")
const sgTransport = require("nodemailer-sendgrid-transport")
exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body)
  const { name } = data.data
  // username + password
  const options = {
    auth: {
      api_key: process.env.REACT_APP_SENDGRID_PASS,
    },
  }

  const mailer = nodemailer.createTransport(sgTransport(options))

  const email = {
    to: ["vucomarija00@gmail.com"],
    from: "marijavucof1@gmail.com",
    subject: "Hi there",
    text: "Awesome sauce",
    html: `<div>  
    <div><b>Who?</b> ${name} </div>
     <p> <b>Project details:</b>  </p>
    	<div>
            <p> <b>Contact:</b> </p>
            <p> <b>E-mail:</b> </p>
        </div>
       
    </div>`,
  }

  mailer.sendMail(email, function (err, res) {
    if (err) {
      console.log(err)
    }
    console.log(res)
  })
}
