const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    var max = 5244;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        const embed = new Discord.RichEmbed()
        .setTitle("Error.")
        .setColor("🔞 You are not in NSFW channel")
        message.channel.send({embed})
    } else {   
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
        request.get("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`${randomname}.jpg`, r.body)
            message.channel.sendFile(r.body).then(d => {
                fs.unlink(`./${randomname}.jpg`)
            })
        })
    }
}
