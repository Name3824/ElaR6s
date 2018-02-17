const Discord = require('discord.js');
function platform(platform) {
    if(platform === 'darwin') return 'Darwin';
    else if(platform === 'freebsd') return 'FreeBSD';
    else if(platform === 'linux') return 'Linux';
    else if(platform === 'sunos') return 'SunOS';
    else if(platform === 'win32') return 'Windows';
}

exports.run = (client, msg) => {
    const emb = new Discord.RichEmbed();
    msg.channel.startTyping();
    emb.setColor("#ffd954");
    emb.setAuthor('Stats of '+client.user.tag, client.user.avatarURL, 'http://mitsuhabot.ml');
    emb.addField('Servers', client.guilds.size, true);
    emb.addField('Channels', client.channels.size, true);
    emb.addField('Users', client.users.size, true);
    emb.addField('Discord.js Version', Discord.version, true);
    emb.addField('Node.js Version', process.version, true);
    emb.addField('PID', process.pid, true);
    emb.addField('Uptime', (Math.round(client.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minutes", true);
    emb.addField('Process Platform', platform(process.platform), true);
    emb.addField('Developers', '☁ G m D b ☁#3353 and ⌬ ᴅ ᴏ ᴄ ⌬#6434', true);
    emb.setThumbnail(client.user.avatarURL);
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
}
