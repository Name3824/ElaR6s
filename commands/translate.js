   const Discord = require('discord.js');
    const translate = require('google-translate-api');    
    exports.run = async (client, message, args) => {
        let words = message.content.split(" ").slice(2).join(" ");
        let language = args[0]
        translate(words, {
            to: language
        }).then(res => {
            const embed = new Discord.MessageEmbed()
                .setAuthor(words)
                .setDescription(res.text)
                .setFooter(res.from.language.iso)
                .setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);
   message.channel.send(embed)
