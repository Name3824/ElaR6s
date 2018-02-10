const Discord = require('discord.js');
const fortnite = require('fortnite.js');
const Fortnite = new fortnite(process.env.FORTNITEAPI);
const platforms = ['PC', 'XBOX', 'PS4'];
const fs = require('fs');
function platform(query, fort) {
    if(query == 'PC') return fort.PC;
    else if(query == 'XBOX') return fort.XBOX;
    else if(query == 'PS4') return fort.PS4;
}

exports.run = (client, msg, args) => {
    const q = args.join(" ");
    const emb = new Discord.RichEmbed();
    if(q.startsWith('-player')) {
        fullStats = q.replace('-player', '').trim();
        allStats = fullStats.split(" ");
        if(!allStats[0]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Platform not defined', 'Try again with a valid platform');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(!platforms.includes(allStats[0].toUpperCase())) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Invalid platform', 'Try again with a valid platform');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(!allStats[1]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Username not defined', 'Try again with a valid username');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(platforms.includes(allStats[0].toUpperCase())) {
            platf = allStats[0];
            plat = platform(platf.toUpperCase(), Fortnite);
            player = fullStats.replace(platf, '').trim();
            Fortnite.get(player, plat).then(async function (p) {
                await msg.channel.startTyping();
                await emb.setAuthor('Stats about '+p.displayName, 'https://res.cloudinary.com/teepublic/image/private/s--W2EuKnua--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1511850332/production/designs/2112154_1.jpg');
                await emb.setColor('#FBD535');
                await emb.setThumbnail('https://res.cloudinary.com/teepublic/image/private/s--W2EuKnua--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1511850332/production/designs/2112154_1.jpg');
                await emb.addField('General', `**Score**: ${p.stats.score}\n**Kills**: ${p.stats.kills}\n**Matches**: ${p.stats.matches}\n**Top 1**: ${p.stats.top1}\n**Top 3**: ${p.stats.top3}\n**Top 5**: ${p.stats.top5}\n**Top 25**: ${p.stats.top25}\n**K/D**: ${p.stats.kd}\n**Time Played**: ${p.stats.timePlayed}`);
                await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                await msg.channel.send({embed:emb});
                await msg.channel.stopTyping();
            });
        }
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor('#FBD535');
        emb.setAuthor('Fortnite Commands', 'https://res.cloudinary.com/teepublic/image/private/s--W2EuKnua--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1511850332/production/designs/2112154_1.jpg');
        emb.setThumbnail('https://res.cloudinary.com/teepublic/image/private/s--W2EuKnua--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1511850332/production/designs/2112154_1.jpg');
        emb.addField('`-player`', "Search for a player's stats\nUsage: `"+process.env.PREFIX+"fortnite -player [platform] [username]`\n\nValid platforms: `pc, ps4, xbox`");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}
