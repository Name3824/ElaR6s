const ping = require('mc-hermes');
const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    const emb = new Discord.RichEmbed();
    const query = args.join(" ");
    if(query.startsWith("server")) {
        ip = query.replace('server', '').trim();
        if(!ip) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Minecraft server not valid.', 'Example `mc.hypixel.net`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        }
        var url = 'https://mcapi.de/api/image/favicon/'+ip
        ping.pc({ server: ip }).then(async function(data) {
            await msg.channel.startTyping();
            await emb.setColor("#75C0AC");
            await emb.setAuthor('Information about '+ip, url);
            await emb.addField('Version', data.version.name);
            await emb.addField('Protocol', data.version.protocol);
            await emb.addField('Players', data.players.online+" out of "+data.players.max);
            await emb.setThumbnail(url);
            await emb.setFooter(msg.author.tag, msg.author.avatarURL);
            await msg.channel.send({embed:emb});
            await msg.channel.stopTyping();
        }).catch(console.error);
    } else if(query.startsWith("user")) {
        user = query.replace('user', '').trim();
        if(!user) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Minecraft user not valid.', 'Example `TovaYolo_Bagnato`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        }
        msg.channel.startTyping();
        emb.setColor("#75C0AC");
        emb.setAuthor(user+"'s Skin", "http://minecraft-skin-viewer.net/3d.php?layers=true&aa=true&a=0&w=0&wt=0&abg=0&abd=0&ajg=0&ajd=0&ratio=13&format=png&login="+user+"&headOnly=true&displayHairs=true&randomness=384");
        emb.setImage("http://minecraft-skin-viewer.net/3d.php?layers=true&aa=true&a=0&w=0&wt=0&abg=0&abd=0&ajg=0&ajd=0&ratio=13&format=png&login="+user+"&headOnly=false&displayHairs=true&randomness=384");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor("#ffd954");
        emb.setAuthor('Correct Usage Of Minecraft Commands', 'https://media.discordapp.net/attachments/264445053596991498/366656518524895232/unknown.png', 'https://minecraft.net');
        emb.setThumbnail('https://media.discordapp.net/attachments/264445053596991498/366656518524895232/unknown.png');
        emb.addField("Search for a user's skin\nUsage:", "b!minecraft user [username]");
        emb.addField("Search for a server's status\nUsage:", "b!minecraft server [server ip]");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}
