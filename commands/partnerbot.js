
exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    msg.channel.startTyping();
    emb.setColor("#75C0AC");
    emb.setAuthor(client.user.tag+' 💙', client.user.avatarURL, 'http://mitsuhabot.ml');
    emb.addField('**Invite Mitsuha!**', '[Click Me](https://discordapp.com/oauth2/authorize?client_id=395546680482725888&scope=bot&permissions=57953281)', true);
    emb.setImage("https://discordbots.org/api/widget/395546680482725888.svg");
    emb.setFooter('Prefix e!');
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
}
