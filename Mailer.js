const fs = require('fs');
const nodemailer = require('nodemailer');

//const file = '/Users/Max/Downloads/Copy of Corporate Sponsors - Sheet1.csv'
const file = '/Users/Max/projects/excercises/test.csv'
const text = fs.readFileSync(file, {encoding:'utf8', flag:'r'})
//console.log(text)

let lines = text.split('\n')
console.log(lines.length)


for(let i = 0 ; i < lines.length; i ++){
    let current = lines[i]
    //console.log(current)
    const parts = current.split(',')
    const name = parts[0]
    let email = parts[1]

    if(email != undefined){
        email = email.trim()
        if(email.length > 0 && email != 'n/a' && email.indexOf('http') < 0 && email.indexOf('no email') < 0){
            console.log(email)

            

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'maxim.veksler@lmghs.org',
                  pass: 'MaxMinion123'
                }
            });
            const mailOptions = {
                from: '"Max Veksler" <maxim.veksler@lmghs.org>',
                to: email,
                subject: 'Leon M. Goldstein Highschool Student Hoping to Make a Difference!',
                text: 
                
`Hello ${name}!

By way of introduction, my name is Max Veksler, I am a student at Leon M. Goldstein Highschool. This spring, I, along with some of my fellow club members, are hosting a tree-planting event with the objective of planting enough trees to compensate for our school’s paper usage. The event is organized by myself and my classmates with the help of a 501c3 non-profit, called Tree-Plenish. 
                
We are reaching out to you today to see if you can help support this community event. In the Spring, we will be planting trees in the yards of community members in order to offset our school’s paper usage. However, these trees cost money. With your support, we can help make this program a reality!
                
This page provides a detailed outline of the different sponsorship tiers. We will be heavily marketing this initiative to our community, and we will be sure to include your name in the outreach if you are able to donate to the event. Please note that each contribution you make goes directly back to our community!
                
If you are interested in becoming an official Tree-Plenish sponsor, please fill out the form at http://www.tree-plenish.com/sponsor. In addition, I am more than happy to answer any questions you may have regarding being a sponsor, so please do not hesitate to reach out with any concerns.   
                
Thank you for your time and consideration, 
                
Max Veksler
Leon M. Goldstein Highschool

.`
                
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
            });

          
        }
    }



   
    



}

console.log("All done")
