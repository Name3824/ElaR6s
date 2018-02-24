const rls = require('rls-api');
const rocket = new rls.Client({ token: process.env.RLSAPI });
const platforms = ['PC', 'XBOX', 'PS4'];
const Discord = require('discord.js');
function platform(query) {
    if(query == 'PC') return '1';
    else if(query == 'PS4') return '2';
    else if(query == 'XBOX') return '3';
}

exports.run = (client, msg, args) => {
    const emb = new Discord.RichEmbed();
    const strings = args.join(" ");
    if(strings.startsWith('player')) {
        playerdata = strings.replace('player', '').trim();
        playerData = playerdata.split(" ");
        if(!playerData[0]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.setTitle('Error.');
            emb.addField('Platform not defined', 'Try agai');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(!platforms.includes(playerData[0].toUpperCase())) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.setTitle('Error.');
            emb.addField('Invalid platform', 'Try again');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(!playerData[1]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.setTitle('Error.');
            emb.addField('Username not defined', 'Try again');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(platforms.includes(playerData[0].toUpperCase())) {
            platf = playerData[0];
            plat = platform(platf.toUpperCase());
            player = playerdata.replace(platf, '').trim();
            rocket.getPlayer(player, plat, async function (status, data) {
                if(status === 200) {
                    await msg.channel.startTyping();
                    await emb.setColor("#75C0AC");
                    await emb.setAuthor('Stats about '+data.displayName, 'https://vignette.wikia.nocookie.net/rocketleague/images/f/f6/Rocketleague-logo.png/revision/latest?cb=20161207070401', 'https://rocketleaguestats.com/');
                    await emb.setImage(data.signatureUrl);
                    await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                    await msg.channel.send({embed:emb});
                    await msg.channel.stopTyping();
                } else if(status === 404) {
                    await msg.channel.startTyping();
                    await emb.setColor('#F03A17');
                    await emb.setTitle('Error.');
                    await emb.addField('User not found', 'Try again');
                    await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                    await msg.channel.send({embed:emb});
                    await msg.channel.stopTyping();
                } else {
                    await msg.channel.startTyping();
                    await emb.setColor('#F03A17');
                    await emb.setTitle('Error.');
                    await emb.addField('An error has occured', 'Report this to '+client.users.get(process.env.OWNER).tag+' with the code '+status);
                    await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                    await msg.channel.send({embed:emb});
                    await msg.channel.stopTyping();
                }
            });
        }
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor("#ffd954");
        emb.setAuthor('Correct Usage of Rocket League Commands', 'https://vignette.wikia.nocookie.net/rocketleague/images/f/f6/Rocketleague-logo.png/revision/latest?cb=20161207070401', 'https://rocketleaguestats.com/');
        emb.setThumbnail('https://i.imgur.com/HzLyjWn.png');
        emb.addField("Search for a player's stats\nUsage:", "b!rocket player [platform] [username]\nValid platforms: `pc, ps4, xbox` \n**For pc account take the id from** https://steamidfinder.com/");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}
