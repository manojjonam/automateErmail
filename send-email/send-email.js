const argv = require('yargs').argv
 
if (argv.file) {
  console.log('fileName',argv.file);
}

const fs = require('fs');

let txtFile = argv.file;
let f = fs.readFileSync(txtFile,'utf8');


    var lines = f.split(/\r\n|\r|\n/);

    var result1 = [{
      name: String,
      email: String
    }];
    var result1= [];
    // var headers=lines[0].split(",");
    lines.splice(0, 1);
    lines.forEach(function(line) {
      // var obj = {};
      var currentline = line.split(',');
        result1.push({
          name: currentline[0],
          email: currentline[1],
          company: currentline[2]
        })
    });
    console.log('rrr',result1);
    var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'manoj@marketcaller.com',
          pass: 'manoj@bitbrains'
        }
      });
      result1.forEach(res => {
          var mailOptions = {
          from: 'manoj@marketcaller.com',
          to: res.email,
          subject: 'Subject: A Quick question about '+ res.company,
          text: `Hi ` + res.name +`,` +`\n`+
                `Came across your website, Congrats on your Ongoing products. My name is Anand and I am the head of business development for MARKET CALLER.I liked to speak to the concerned person about INSIDE SALES. If that's you, are you open to a fifteen-minute call to discuss ways MARKET CALLER can take your product to the targeted group?  If not, can you please put me in touch with the right person I appreciate the help!`
                + `\n`+`www.marketcaller.com`+`\n`+`\n`+
                `With regards`+`\n`+
                
                `Manoj`
                
        };
          // console.log('linedd',currentline)

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      })