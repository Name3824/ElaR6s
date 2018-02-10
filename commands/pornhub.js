const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const query = args.join(' ')
    if (!query) return message.channel.send("🔞 **Usage : e!pornhub <query>**")
    if (!message.channel.nsfw) return message.channel.send(":underage: You are not in NSFW channel.")
    const Pornsearch = require('pornsearch').default.search(query);
        Pornsearch.gifs(1)
            .then(gifs => {
                let gifrnd = gifs.map(gif => gif.url)
                let embed = new Discord.RichEmbed()
                   .setColor(0xffa43d)
                    .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
                message.channel.send({
                    embed: embed
                })
            })
}
