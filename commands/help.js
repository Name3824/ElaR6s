exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    msg.channel.startTyping();
    emb.setColor("#75C0AC");
    emb.setAuthor(client.user.tag+' Commands', client.user.avatarURL, 'http://mitsuhabot.ml');
    emb.addField('**Stats Games 🎮**', '-`lol` -`r6s` -`rocket` -`minecraft` -`cr` -`fortnite` -`s-pokemon`', true);
    emb.addField('**Fun 🎉**', '-`meme` -`battle` -`illegal` -`ascii` -`react`', true);
    emb.addField('**Nsfw 💦**', '-`ass` -`boobs` -`pussy` -`pornhub` -`neko` -`hentai` -`gif`', true);
    emb.addField('**Utility 🤘**', '-`invite` -`partnerbot` -`feedback` -`imdb` -`weather` -`emojilist` -`servers` -`emoteinfo`', true);
    emb.setFooter('Prefix e!');
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
    msg.react('414108671166119946');
}
