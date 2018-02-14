exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    msg.channel.startTyping();
    emb.setColor("#75C0AC");
    emb.setAuthor(client.user.tag+' Commands', client.user.avatarURL, 'http://mitsuhabot.ml');
    emb.addField('**Stats Games 🎮**', '-`lol` -`r6s` -`rocket` -`minecraft` -`cr` -`fortnite`', true);
    emb.addField('**Fun 🎉**', '-`meme` -`battle` -`illegal` -`ascii`', true);
    emb.addField('**Nsfw 💦**', '-`ass` -`boobs` -`pussy` -`pornhub` -`neko` -`hentai` -`gif`', true);
    emb.addField('**Utility 🤘**', '-`invite` -`partnerbot`', true);
    emb.setFooter('Prefix e!');
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
}
