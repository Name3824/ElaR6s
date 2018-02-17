exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    msg.channel.startTyping();
    emb.setColor("#75C0AC");
    emb.setAuthor(client.user.tag+' invite', client.user.avatarURL, 'http://mitsuhabot.ml');
    emb.addField('**Invite Me!**', '[Click Me](https://discordapp.com/oauth2/authorize?client_id=411860199473938433&scope=bot&permissions=8)', true);
    emb.setFooter('Prefix g! | g!partnerbot');
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
}
