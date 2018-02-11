const Discord = require('discord.js');
const request = require('request');
const url = 'http://api.cr-api.com';
function numberWithCommas(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

exports.run = (client, msg, args) => {
    const emb = new Discord.RichEmbed();
    const q = args.join(' ');
    if(q.startsWith('-player')) {
        s = q.replace('-player', '').trim();
        if(!s[0]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Player tag not valid.', 'Example `28LLY2JC9`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        }
        request({method:'GET', url: url+'/player/'+s, headers: { auth: process.env.CLASHAPI }}, async function(err, response, body) {
            if(!err && response.statusCode == 200) {
                var r = JSON.parse(body);
                await msg.channel.startTyping();
                await emb.setColor('#69B6F7');
                await emb.setTitle('**Stats about** '+r.name);
                await emb.setThumbnail(r.clan.badge.image);
                await emb.addField(r.arena.arena, '**'+r.arena.name+'**');
                await emb.addField('Trophies / Max Trophies', '**'+r.trophies+'** / **'+r.stats.maxTrophies+'**<:trophycr:412196895524651010>');
                await emb.addField('Clan ['+r.clan.tag+']', 'Clan name: **'+r.clan.name+'**\n'+r.name+"'s role: **"+r.clan.role+'**');
                await emb.addField('Games ['+r.games.total+']', '**'+numberWithCommas(r.games.wins)+'** Wins / **'+numberWithCommas(r.games.losses)+'** Losses / **'+numberWithCommas(r.games.draws)+'** Draws / **'+numberWithCommas(r.stats.threeCrownWins)+'** Three Crown Wins');
                await emb.addField('Total Donations', '**'+r.stats.totalDonations+'** <:Cards0:412196582369263620>')
                await emb.addField('Chest Rotation', '<:LegendaryChest:412177362688409601> : **'+r.chestCycle.legendary+'** chests\n<:Magical_super_chest:412177259802394624> : **'+r.chestCycle.superMagical+'** chests\n<:EpicChest:412177187244867586> : **'+r.chestCycle.epic+'** chests\n<:Magical_chest:412177312805814272> : **'+r.chestCycle.magical+'** chests\n<:Giant_chest:412177146782547970> : **'+r.chestCycle.giant+'** chests');
                await msg.channel.send({embed:emb});
                await msg.channel.stopTyping();
            } else if(err) {
                await msg.channel.send('```'+err+'```');
            }
        });
    } else if(q.startsWith('-clan')) {
        s = q.replace('-clan', '').trim();
        if(!s[0]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Clan tag not valid.', 'Use a valid one, for example `L28U2L`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        }
        request({method: 'GET', url: url+'/clan/'+s, headers: { auth: process.env.CLASHAPI }}, async function(err, response, body) {
            if(!err && response.statusCode == 200) {
                var r = JSON.parse(body);
                await msg.channel.startTyping();
                await emb.setColor('#69B6F7');
                await emb.setAuthor('Stats about '+r.name+' - '+r.type, r.badge.image);
                await emb.setThumbnail(r.badge.image);
                await emb.setDescription('*"'+r.description+'"* - '+r.name);
                await emb.addField('Members', '**'+r.memberCount+'** out of **50**');
                await emb.addField('Clan Trophies', '**'+r.score+'**');
                await emb.addField('Required Trophies', '**'+r.requiredScore+'**');
                await emb.addField('Donations Per Week', '**'+r.donations+'**');
                await emb.addField('Region', '**'+r.location.name+'**');
                await emb.addField('Clan Chest', '**'+r.clanChest.crowns+' / '+'1600'+' [Level '+r.clanChest.level+']**');
                await msg.channel.send({embed:emb});
                await msg.channel.stopTyping();
            } else if(err) {
                await msg.channel.send('```'+err+'```');
            }
        })
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor('#69B6F7');
        emb.setAuthor('Clash Royale Commands', 'https://vignette.wikia.nocookie.net/clashroyale/images/b/b2/League8.png/revision/latest?cb=20170317224402', 'https://clashroyale.com');
        emb.setThumbnail('https://vignette.wikia.nocookie.net/clashroyale/images/b/b2/League8.png/revision/latest?cb=20170317224402');
        emb.addField('`-player`', "Search for a player's stats through his tag\nUsage: `"+process.env.PREFIX+"cr -player [player tag]`");
        emb.addField('`-clan`', "Search for a clan's stats through its tag\nUsage: `"+process.env.PREFIX+"cr -clan [clan tag]`");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();        
    }
}
