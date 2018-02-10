
const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    var max = 12119;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        const embed = new Discord.RichEmbed()
        .setTitle("Error.")
        .setDescription("🔞 You are not in NSFW channel")
        .setColor(0xf94a53)
message.channel.send({embed})
    } else {   
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
        request.get("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`${randomname}.jpg`, r.body)
            message.channel.sendFile(r.body).then(d => {
                fs.unlink(`./${randomname}.jpg`)
            })
        })
    }
}
