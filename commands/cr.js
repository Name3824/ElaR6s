exports.run = (client, msg, args) => {
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    const request = require('request');
    const url = 'http://api.cr-api.com';
    const q = args.join(' ');
    function numberWithCommas(x) {
        const parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    function chests(higher, lower) {
        return (higher - lower) + 1
    }
    function day(d) {
        if(d = 1) return d+' day';
        else if(d > 1) return d+' days';
    }
    if(q.startsWith('-player')) {
        s = q.replace('-player', '').trim();
        if(!s[0]) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Player tag not valid.', 'Use a valid one, for example `28LLY2JC9`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        }
        request(url+'/profile/'+s, function(err, response, body) {
            if(!err && response.statusCode == 200) {
                var r = JSON.parse(body);
                msg.channel.startTyping();
                emb.setColor('#69B6F7');
                emb.setAuthor('Stats about '+r.name, url+r.arena.imageURL);
                emb.setThumbnail(url+r.clan.badge.url);
                emb.addField(r.arena.arena, '**'+r.arena.name+'**');
                emb.addField('Trophies / Max Trophies', '**'+r.trophies+'** / **'+r.stats.maxTrophies+'**');
                emb.addField('Clan ['+r.clan.tag+']', 'Clan name: **'+r.clan.name+'**\n'+r.name+"'s role: **"+r.clan.role+'**');
                emb.addField('Level '+r.experience.level, '**'+numberWithCommas(r.experience.xp)+' / '+numberWithCommas(r.experience.xpRequiredForLevelUp)+'** experience');
                emb.addField('Games ['+r.games.total+']', '**'+numberWithCommas(r.games.wins)+'** Wins / **'+numberWithCommas(r.games.losses)+'** Losses / **'+numberWithCommas(r.games.draws)+'** Draws / **'+numberWithCommas(r.stats.threeCrownWins)+'** Three Crown Wins');
                emb.addField('Total Donations', '**'+r.stats.totalDonations+'** cards')
                emb.addField('Chest Rotation', 'Legendary Chest: **'+chests(r.chestCycle.legendaryPos, r.chestCycle.position)+'** chests\nSuper Magical Chest: **'+chests(r.chestCycle.superMagicalPos, r.chestCycle.position)+'** chests\nEpic Chest: **'+chests(r.chestCycle.epicPos, r.chestCycle.position)+'** chests');
                emb.addField('Shop Offers', 'Legendary Chest: **'+day(r.shopOffers.legendary)+'**\nEpic Chest: **'+day(r.shopOffers.epic)+'**\nArena Chest: **'+day(r.shopOffers.arena)+'**');
                msg.channel.send({embed:emb});
                msg.channel.stopTyping();
            } else if(err) {
                msg.channel.send('```'+err+'```');
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
        request(url+'/clan/'+s, function(err, response, body) {
            if(!err && response.statusCode == 200) {
                var r = JSON.parse(body);
                msg.channel.startTyping();
                emb.setColor('#69B6F7');
                emb.setAuthor('Stats about '+r.name+' - '+r.typeName, url+r.badge.url);
                emb.setThumbnail(url+r.badge.url);
                emb.setDescription('*"'+r.description+'"* - '+r.name);
                emb.addField('Members', '**'+r.memberCount+'** out of **50**');
                emb.addField('Clan Trophies', '**'+r.score+'**');
                emb.addField('Required Trophies', '**'+r.requiredScore+'**');
                emb.addField('Donations Per Week', '**'+r.donations+'**');
                emb.addField('Region', '**'+r.region.name+'**');
                emb.addField('Clan Chest', '**'+r.clanChest.clanChestCrowns+' / '+r.clanChest.clanChestCrownsRequired+' ['+r.clanChest.clanChestCrownsPercent+'%]**');
                msg.channel.send({embed:emb});
                msg.channel.stopTyping();
            } else if(err) {
                msg.channel.send('```'+err+'```');
            }
        })
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor('#69B6F7');
        emb.setAuthor('Clash Royale Commands', 'https://vignette.wikia.nocookie.net/clashroyale/images/b/b2/League8.png/revision/latest?cb=20170317224402', 'https://clashroyale.com');
        emb.setThumbnail('https://vignette.wikia.nocookie.net/clashroyale/images/b/b2/League8.png/revision/latest?cb=20170317224402');
        emb.addField('`-player`', "Search for a player's stats through his tag\nUsage: `"+process.env.PREFIX+"cr -player 28LLY2JC9`");
        emb.addField('`-clan`', "Search for a clan's stats through its tag\nUsage: `"+process.env.PREFIX+"cr -clan L28U2L`");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();        
    }
}