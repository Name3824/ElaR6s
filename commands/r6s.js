const Discord = require('discord.js');
const RainbowSix = require('rainbowsix-api-node');
const r6 = new RainbowSix();
const platforms = ['UPLAY', 'XONE', 'PS4'];
function platform(query) {
    if(query == 'UPLAY') return '1';
    else if(query == 'PS4') return '2';
    else if(query == 'XONE') return '3';
}

exports.run = (client, msg, args) => {
    const q = args.join(" ");
    const emb = new Discord.RichEmbed();
    if(q.startsWith('player')) {
        fullStats = q.replace('player', '').trim();
        allStats = fullStats.split(" ");
        if(!allStats[0]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.setTitle('Error.');
            emb.addField('Platform not defined', 'Try again');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(!platforms.includes(allStats[0].toUpperCase())) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.setTitle('Error.');
            emb.addField('Invalid platform', 'Try again');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(!allStats[1]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.setTitle('Error.');
            emb.addField('Username not defined', 'Try again with');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(platforms.includes(allStats[0].toUpperCase())) {
            r6.get(args[1], args[0]).then(data => {
                await msg.channel.startTyping();
                await emb.setAuthor('Stats about '+data.player.username, 'https://cdn.atr.cloud/monthly_2017_10/FortniteClient-Win64-Shipping_123.ico_256x256.png.9db57869789ecc4d9c5f72c5a9ba9e30.thumb.png.d8d082ccd47b246fc3773e854b1b2ead.png');
                await emb.setColor("#75C0AC");
                await emb.setThumbnail('https://cdn.atr.cloud/monthly_2017_10/FortniteClient-Win64-Shipping_123.ico_256x256.png.9db57869789ecc4d9c5f72c5a9ba9e30.thumb.png.d8d082ccd47b246fc3773e854b1b2ead.png');
                await emb.addField('General', `**Level**: ${data.player.stats.progression.level}`);
                await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                await msg.channel.send({embed:emb});
                await msg.channel.stopTyping();
            });
        }
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor("#ffd954");
        emb.setAuthor('Correct Usage Of Fortnite Commands', 'https://cdn.atr.cloud/monthly_2017_10/FortniteClient-Win64-Shipping_123.ico_256x256.png.9db57869789ecc4d9c5f72c5a9ba9e30.thumb.png.d8d082ccd47b246fc3773e854b1b2ead.png');
        emb.setThumbnail('https://cdn.atr.cloud/monthly_2017_10/FortniteClient-Win64-Shipping_123.ico_256x256.png.9db57869789ecc4d9c5f72c5a9ba9e30.thumb.png.d8d082ccd47b246fc3773e854b1b2ead.png');
        emb.addField("Search for a player's stats\nUsage:", "b!fortnite player [platform] [username]\n\nValid platforms: `pc, ps4, xbox`");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}
