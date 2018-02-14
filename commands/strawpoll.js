const Discord = require("discord.js");
var unirest = require('unirest');
module.exports.run = async (client, message, args) => {
    try {
        var title = message.content.substr(0, message.content.indexOf("|"));
        var args = message.content.split('|')[1];
        var opts = args.split(',');
        
        unirest.post('https://strawpoll.me/api/v2/polls')
        .headers({'Content-Type': 'application/json;charset=UTF-8'})
        .send({
            title: title,
            options: opts,
            multi: false,
            dupcheck: 'normal',
            captcha: false
        })
        .end(function(response) {
            console.log(response.body);
            message.channel.send(`Created poll with title ${response.body.title} at https://strawpoll.me/${response.body.id}`);
        });
    } catch(err) {
        message.channel.send('Wrong use of the command!\nCommand Usage: //poll question|option1, option2, option3, etc.');
    }
}
