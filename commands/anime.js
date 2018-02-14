const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var sent = undefined
    var request = require('request');
    let msg = await message.channel.send("Image Loading...").then(msg => sent = msg)

        request('https://www.reddit.com/r/animefunny/random/.json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var json = JSON.parse(body);
                var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
                const embed = new Discord.RichEmbed()
                .setColor(embedcolor)
                .setFooter("Powered by Uzumaki-Clan")
                .setDescription("Random anime images!!")
                .setImage(`${json[0].data.children[0].data.preview.images[0].source.url}`)
                message.channel.send({embed: embed});
                msg.delete();
            }
        });
}
