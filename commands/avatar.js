const Discord = require('discord.js')
exports.run = (client, message, args) => {      
            message.mentions.members.first() !== undefined ? person = message.mentions.members.first() : person = message.member
            const embed = new Discord.RichEmbed()
            .setImage(person.user.avatarURL({size: 2048}))
            .setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);
            message.channel.send({embed})
    }
