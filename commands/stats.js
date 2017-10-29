exports.run = (client, msg) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
    function platform(platform) {
        if(platform === 'darwin') return 'Darwin';
        else if(platform === 'freebsd') return 'FreeBSD';
        else if(platform === 'linux') return 'Linux';
        else if(platform === 'sunos') return 'SunOS';
        else if(platform === 'win32') return 'Windows';
    };
    msg.channel.startTyping();
    embed.setAuthor('Stats of '+client.user.tag, client.user.avatarURL);
    embed.addField('Servers:', client.guilds.size, true);
    embed.addField('Channels:', client.channels.size, true);
    embed.addField('Users:', client.users.size, true);
    embed.addField('Discord.js Version:', Discord.version, true);
    embed.addField('Node.js Version', process.version, true);
    embed.addField('PID', process.pid, true);
    embed.addField('Process Platform', platform(process.platform), true);
    embed.setThumbnail(client.user.avatarURL);
    msg.channel.send({embed});
    msg.channel.stopTyping();
}