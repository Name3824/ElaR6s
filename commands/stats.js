exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    function platform(platform) {
        if(platform === 'darwin') return 'Darwin';
        else if(platform === 'freebsd') return 'FreeBSD';
        else if(platform === 'linux') return 'Linux';
        else if(platform === 'sunos') return 'SunOS';
        else if(platform === 'win32') return 'Windows';
    }
    msg.channel.startTyping();
    emb.setColor("#75C0AC");
    emb.setAuthor('Stats of '+client.user.tag, client.user.avatarURL, 'https://vghelper.tk');
    emb.addField('Servers', client.guilds.size, true);
    emb.addField('Channels', client.channels.size, true);
    emb.addField('Users', client.users.size, true);
    emb.addField('Discord.js Version', Discord.version, true);
    emb.addField('Node.js Version', process.version, true);
    emb.addField('PID', process.pid, true);
    emb.addField('Process Platform', platform(process.platform), true);
    emb.setThumbnail(client.user.avatarURL);
    msg.channel.send({embed:emb});
    msg.channel.stopTyping();
}