exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    msg.channel.startTyping();
    emb.setColor('#2040ff');
    emb.setAuthor(client.user.tag+' Commands', client.user.avatarURL, 'http://vgh.ftp.sh');
    emb.addField('Command List', process.env.PREFIX+"cr** ➤ Shows stats in Clash Royale\n**"+process.env.PREFIX+"gw2** ➤ Shows stats in Guild Wars 2\n**"+process.env.PREFIX+"igdb** ➤ Shows stats in the Internet Game Database\n**"+process.env.PREFIX+"lol** ➤ Shows stats in League of Legends\n**"+process.env.PREFIX+"minecraft** ➤ Shows stats in Minecraft\n**"+process.env.PREFIX+"osu** ➤ Shows stats in osu!\n**"+process.env.PREFIX+"rocket** ➤ Shows stats in Rocket League\n**"+process.env.PREFIX+"stats** ➤ Shows stats about the bot**");
    emb.setFooter(msg.author.tag, msg.author.avatarURL);
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
}
