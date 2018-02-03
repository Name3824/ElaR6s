const gw2 = require('gw2-api');
const api = new gw2.gw2();
const quests = [];
const Discord = require('discord.js');
const emb = new Discord.RichEmbed();
function emoji(emo) {
    delete require.cache[require.resolve(`../resources/emoji.js`)];
    let emojia = require("../resources/emoji.js");
    if (emojia[emo] === undefined) return "🅱";
    return emojia[emo];
}
function divider(coins) {
    return parseInt(coins) / 100;
}
function lastTwo(coins) {
    return parseInt(coins) % 100;
}

exports.run = (client, msg, args) => {
    const argu = args.join(" ");
    if(argu.startsWith('-daily')) {
        api.getDailyAchievements().then(async function (res) {
            if (!res.pve) {
                return;
            }
            var achievementIds = [];
            for (var i = 0, len = res.pve.length; i < len; i++) {
                achievementIds.push(res.pve[i].id);
            }
            return api.getAchievements(achievementIds);
        }).then(async function (res) {
            await msg.channel.startTyping();
            await emb.setAuthor('Daily GW2 Quests', 'https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png');
            await emb.setFooter(msg.author.tag, msg.author.avatarURL);
            await emb.setColor('#951111');
            for (var i = 0, len = res.length; i < len; i++) {
                quests.push(res[i].name);
            }
            await emb.addField('₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪₪', quests.join("\n"));
            await msg.channel.send({embed:emb});
            await msg.channel.stopTyping();
        });
    } else if(argu.startsWith('-exchange')) {
        api.getCommerceExchange('coins', '30000').then(async function (res) {
            await msg.channel.startTyping();
            await emb.setAuthor("GW2 Currency Exchange", "https://orig00.deviantart.net/a943/f/2013/349/2/4/guild_wars_2___dock_icon_by_blakegedye-d6y3hha.png");
            await emb.setFooter(msg.author.tag, msg.author.avatarURL);
            await emb.setColor('#951111');
            await emb.addField("1 "+emoji('gw2_gem'), "**"+divider(res.coins_per_gem)+"** "+emoji('gw2_silver_coin')+" **"+lastTwo(res.coins_per_gem)+"** "+emoji('gw2_copper_coin'));
            await msg.channel.send({embed:emb});
            await msg.channel.stopTyping();
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