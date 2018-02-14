exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    msg.channel.startTyping();
    emb.setColor('#2040ff');
    emb.setAuthor(client.user.tag+' Commands', client.user.avatarURL, 'http://mitsuhabot.ml');
    emb.addField('**Stats Games 🎮**', '-`lol` -`r6s` -`rocket` -`minecraft` -`cr` -`fortnite`', true);
    emb.addField('**Fun 🎉**', '-`meme` -`battle` -`illegal` -`ascii`', true);
    emb.addField('**Nsfw 💦**', '-`ass` -`boobs` -`pussy` -`pornhub` -`neko` -`hentai` -`gif`', true);
    emb.setFooter(msg.author.tag, msg.author.avatarURL);
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
}
