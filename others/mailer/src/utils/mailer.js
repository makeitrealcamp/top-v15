const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.aol.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AOL_USERNAME,
    pass: process.env.AOL_PASSWORD,
  }
});

exports.verify = async () => {
  const status = await transporter.verify();
  console.log(status ? 'Connection with email server established' : 'something went wrong');
}

exports.welcome = async ({ email, name }) => {
  const styles = {
    container: 'background-color: goldenrod',
    title: 'color: lightblue',
  };

  await transporter.sendMail({
    from: 'Simon Hoyos <simonhoyos@aol.com>',
    to: email,
    subject: 'Bienvenida',
    // html: '<div style="background-color:goldenrod"><h1 style="color: lightblue">Hola ' + user.name + '</h1></div>',
    html: `
      <div style="${styles.container}">
        <h1 style="${styles.title}">Hola ${name}</h1>
      </div>
    `,
    text: 'Hola',
  });
}

exports.recover = async ({ email, name }) => {
  const styles = {
    container: 'background-color: goldenrod',
    title: 'color: lightblue',
  };

  await transporter.sendMail({
    from: 'Simon Hoyos <simonhoyos@aol.com>',
    to: email,
    subject: 'Password Recovery',
    html: `
      <div style="${styles.container}">
        <h1 style="${styles.title}">Hola ${name}</h1>
        <p>to create a new password go to this link</p>
        <a href="http://localhost:8000/?token=asdr3eiurwe">Link</a>
      </div>
    `,
  });
}

// exports.connectMailer = async () => {
  // const account = await nodemailer.createTestAccount();

//   console.log(nodemailer.getTestMessageUrl(mail))
// }
