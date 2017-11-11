exports.run = (client, msg, args) => {
    const argu = args.join(" ");
    const gw2 = require('gw2-api');
    const api = new gw2.gw2();
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    function emoji(emo) {
        delete require.cache[require.resolve(`../resources/emoji.js`)];
        let emojia = require("../resources/emoji.js");
        if (emojia[emo] === undefined) return "🅱";
        return emojia[emo];
    }
    if(argu.startsWith('-daily')) {
        api.getDailyAchievements().then(function (res) {
            if (!res.pve) {
                return;
            }
            var achievementIds = [];
            for (var i = 0, len = res.pve.length; i < len; i++) {
                achievementIds.push(res.pve[i].id);
            }
            return api.getAchievements(achievementIds);
        }).then(function (res) {
            var quests = [];
            msg.channel.startTyping();
            emb.setAuthor('Daily GW2 Quests', 'https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            emb.setColor('#951111');
            for (var i = 0, len = res.length; i < len; i++) {
                quests.push(res[i].name);
            }
            emb.addField('₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪', quests.join("\n"));
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        });
    } else if(argu.startsWith('-exchange')) {
        api.getCommerceExchange('coins', '30000').then(function (res) {
            msg.channel.startTyping();
            emb.setAuthor("GW2 Currency Exchange", "https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png");
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            emb.setColor('#951111');
            emb.addField("1 "+emoji('gw2_gem')+"\n**"+res.coins_per_gem+"** "+emoji('gw2_copper_coin'));
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        });
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor('#951111');
        emb.setAuthor('Guild Wars 2 Commands', 'https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png', 'https://guildwars2.com/');
        emb.setThumbnail('https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png');
        emb.addField('`-daily`', "Search for GW2 Daily Quests\nUsage: `"+process.env.PREFIX+"gw2 -daily`");
        emb.addField('`-exchange`', "See the exchange value from coins to gems\nUsage: `"+process.env.PREFIX+"gw2 -exchange`");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);        
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}