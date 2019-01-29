// middlewares/node_mailer.js

const nodemailer = require('nodemailer');
// const config = require('../config');

// Generate test SMTP service account from ethereal.email
class MyMailer{
    static sendGoogle(
      firstName
      , lastName
      , subject
      , email
      , message
    ){
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: '사용할개발자(?)메일주소@gmail.com',
                pass: '사용할...메일주소의비밀번호'
            }
        });

        let mailOptions = {
            from:{
                name: firstName + ' ' + lastName,
                address: '사용할...메일주소(auth의메일주소와동일하게설정)'
            }, // sender address 어차피 위의 auth 메일계정으로 설정되어 메일전송됨.
            to:
            '받을사람메일주소@naver.com'
             , // list of receivers 받는 메일주소 설정하는 곳.
            subject: phone + '_' + subject, // Subject line
            text: message // text
        };
        transporter.sendMail(mailOptions, (error, info) => {
            console.log(error,info)
        });
    }

      // static test (){
      //   // Only needed if you don't have a real mail account for testing
      //   nodemailer.createTestAccount((err, account) => {
      //
      //       // create reusable transporter object using the default SMTP transport
      //       let transporter = nodemailer.createTransport({
      //           host: 'smtp.ethereal.email',
      //           port: 587,
      //           secure: false, // true for 465, false for other ports
      //           auth: {
      //               user: account.user, // generated ethereal user
      //               pass: account.pass  // generated ethereal password
      //           }
      //       });
      //
      //       // setup email data with unicode symbols
      //       let mailOptions = {
      //           from: '"Kim XXXX &#128522;" <xxxx@gmail.com>', // sender address
      //           to: 'xxxx@gmail.com', // list of receivers
      //           subject: 'Hello &#128522;', // Subject line
      //           text: 'Hello onemoon?', // plain text body
      //           html: '<b>Hello world?</b>' // html body
      //       };
      //
      //       // send mail with defined transport object
      //       transporter.sendMail(mailOptions, (error, info) => {
      //           if (error) {
      //               return console.log(error);
      //           }
      //           console.log('Message sent: %s', info.messageId);
      //           // Preview only available when sending through an Ethereal account
      //           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      //
      //           // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
      //           // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      //       });
      //   });
      // }
}
module.exports = MyMailer;

// 위 설정을 사용시, 반드시 자신이 사용할 구글 아이디로 구글에 접속 후에
// https://myaccount.google.com/lesssecureapps 에 들어가서 활성화,
// https://accounts.google.com/DisplayUnlockCaptcha 에 들어가서도 활성화를 한다.
