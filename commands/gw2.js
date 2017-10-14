exports.run = (client, msg, args) => {
    const argu = args.join(" ");
    const gw2 = require('gw2-api');
    const api = new gw2.gw2();
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
    const emb = new Discord.RichEmbed();
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
            embed.setAuthor("Daily GW2 Quests", "https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png");
            embed.setFooter(msg.author.tag, msg.author.avatarURL);
            embed.setColor(0x951111);
            for (var i = 0, len = res.length; i < len; i++) {
                embed.addField("‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏", res[i].name, true);
            }
            msg.channel.startTyping();
            msg.channel.send({embed});
            msg.channel.stopTyping();
        });
    } else if(argu.startsWith('-exchange')) {
        api.getCommerceExchange('coins', '30000').then(function (res) {
            msg.channel.startTyping();
            emb.setAuthor("GW2 Currency Exchange", "https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png");
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            emb.setColor(0x951111);
            emb.addField("1 <:gw2_gem:368419887447670785>", "**"+res.coins_per_gem+"** <:gw2_copper_coin:368411814557384713>");
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        });
    } else if(!args[0]) {
        msg.channel.startTyping();
        msg.channel.send({embed: {
            color: 0x951111,
            author: {
                name: "Guild Wars 2 Commands",
                icon_url: "https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png"
            },
            thumbnail: {
                url: "https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png"
            },
            fields: [
                {
                    name: "`-quests`",
                    value: "Search for GW2 Daily Quests\nUsage: `"+process.env.PREFIX+"gw2 -quests`"
                },{
                    name: "`-exchange`",
                    value: "See the exchange value from coins to gems\nUsage: `"+process.env.PREFIX+"gw2 -exchange`"
                }
            ],
            footer: {
                icon_url: msg.author.avatarURL,
                text: `${msg.author.tag}`
            }
        }});
        msg.channel.stopTyping();
    }
}