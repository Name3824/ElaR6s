const Discord = require('discord.js');
const memes = require('dankmemes')
exports.run = (client, message, args) => {
        memes('day', 100, function(err, data) {
            JSON.stringify(data)
            var result = Math.floor((Math.random() * 100));
            const embed = new Discord.MessageEmbed()
                .setImage(data[result])
                .setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);
            message.channel.send(embed)
        });
}
