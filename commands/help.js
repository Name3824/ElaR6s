exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    msg.channel.startTyping();
    emb.setColor('#2040ff');
    emb.setAuthor('About '+client.user.tag, client.user.avatarURL, 'http://vghelper.tk');
    emb.addField('Howdy!', "I'm "+client.user.username+", and as the name says, i'm a damn video game helper!\nI'm built with [node.js](https://nodejs.org), [discord.js](https://discord.js.org) and with "+client.users.get(process.env.OWNER).tag+"'s love aswell!\nIf you want to add me to your guild to suite your gaming needs, click [here](https://discordapp.com/oauth2/authorize?client_id=357164743489880074&scope=bot&permissions=281664) to invite me!\n*[You need the `MANAGE_SERVER` permission to add me to a guild of your choice]*\nIf you like what i'm doing, please consider [giving my developer a coffee](https://ko-fi.com/pillgp). VPS costs are high, and we need all the support so that I can be online.");
    emb.addField('Some of my commands', "**"+process.env.PREFIX+"osu** ➤ Shows stats in osu! \n**"+process.env.PREFIX+"minecraft** ➤ Shows stats in Minecraft\n**"+process.env.PREFIX+"gw2** ➤ Shows stats in Guild Wars 2\n**"+process.env.PREFIX+"lol** ➤ Shows stats in League of Legends\n**"+process.env.PREFIX+"igdb** ➤ Shows info in the Internet Game Database [IGDB for short]\n**"+process.env.PREFIX+"cr** ➤ Shows stats in Clash Royale\n**"+process.env.PREFIX+"stats** ➤ Shows my statistics");
    emb.setFooter(msg.author.tag, msg.author.avatarURL);
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
}