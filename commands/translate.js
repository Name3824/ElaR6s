   const Discord = require('discord.js');
    const translate = require('google-translate-api');    
    exports.run = (client, message, args) => {
        let words = message.content.split(" ").slice(2).join(" ");
        let language = args[0]
        translate(words, {
            to: language
        }).then(res => {
            const emb = new Discord.RichEmbed()
                emb.setAuthor(words)
                emb.setDescription(res.text)
                emb.setFooter(res.from.language.iso)
                emb.setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);
   message.channel.send({embed:emb})
