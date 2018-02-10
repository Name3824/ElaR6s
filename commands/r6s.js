const RainbowSix = require('rainbowsix-api-node');
const r6 = new RainbowSix();
const platforms = ['uplay', 'xone', 'ps4'];
const Discord = require('discord.js');
function platform(query) {
    if(query == 'UPLAY') return '1';
    else if(query == 'PS4') return '2';
    else if(query == 'XBOX') return '3';
}

exports.run = (client, msg, args) => {
    const emb = new Discord.RichEmbed();
    const strings = args.join(" ");
    if(strings.startsWith('-player')) {
        playerdata = strings.replace('-player', '').trim();
        playerData = playerdata.split(" ");
        if(!playerData[0]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Platform not defined', 'Try again with a valid platform');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(!platforms.includes(playerData[0].toUpperCase())) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Invalid platform', 'Try again with a valid platform');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        } else if(!playerData[1]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Username not defined', 'Try again with a valid username');
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
                    await emb.setColor('#0592DF');
                    await emb.setAuthor('Stats about '+data.player.username, 'https://vignette.wikia.nocookie.net/rocketleague/images/f/f6/Rocketleague-logo.png/revision/latest?cb=20161207070401', 'https://rocketleaguestats.com/');
                    await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                    await msg.channel.send({embed:emb});
                    await msg.channel.stopTyping();
                } else if(status === 404) {
                    await msg.channel.startTyping();
                    await emb.setColor('#F03A17');
                    await emb.addField('User not found', 'Try again with a valid username / tag');
                    await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                    await msg.channel.send({embed:emb});
                    await msg.channel.stopTyping();
                } else {
                    await msg.channel.startTyping();
                    await emb.setColor('#F03A17');
                    await emb.addField('An error has occured', 'Report this to '+client.users.get(process.env.OWNER).tag+' with the code '+status);
                    await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                    await msg.channel.send({embed:emb});
                    await msg.channel.stopTyping();
                }
            });
        }
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor('#0592DF');
        emb.setAuthor('Rocket League Commands [powered by RocketLeagueStats]', 'https://vignette.wikia.nocookie.net/rocketleague/images/f/f6/Rocketleague-logo.png/revision/latest?cb=20161207070401', 'https://rocketleaguestats.com/');
        emb.setThumbnail('https://i.imgur.com/HzLyjWn.png');
        emb.addField('`-player`', "Search for a player's stats\nUsage: `"+process.env.PREFIX+"rocket -player [platform] [username]`\n\nValid platforms: `pc, ps4, xbox`\nIf you're checking stats on the PC, use your [STEAM64 ID](https://steamid.io/)");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}
