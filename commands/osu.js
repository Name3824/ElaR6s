exports.run = (client, msg, args) => {
    const osu = require('node-osu');
    const user = args.join(" ");
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    const osuApi = new osu.Api(process.env.OSU);
    function numberWithCommas(x) {
        const parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    function emoji(emo) {
        delete require.cache[require.resolve(`../resources/emoji.js`)];
        let emojia = require("../resources/emoji.js");
        if (emojia[emo] === undefined) return "🅱";
        return emojia[emo];
    }
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
          return this.toString().replace(/^\s+|\s+$/g, '');
        };
    }
    if(user.startsWith("-osusig")) {
        username = user.replace('-osusig', '').trim();
        if(!username) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('osu! player not valid.', 'Use a valid one, for example `Cookiezi`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        }
        var url = 'https://lemmmy.pw/osusig/sig.php?uname=' + encodeURI(username);
        msg.channel.startTyping();
        emb.setColor('#EA5F9C');
        emb.setImage(url);
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    } else if(user.startsWith("-stats")){
    username = user.replace('-stats', '').trim();
    if(!username) {
        msg.channel.startTyping();
        emb.setColor('#F03A17');
        emb.addField('osu! player not valid.', 'Use a valid one, for example `Cookiezi`');
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
    osuApi.getUser({u: username}).then(async function(user) {
        const pais = user.country;
        await msg.channel.startTyping();
        await emb.setColor('#EA5F9C');
        await emb.setAuthor(user.name+"'s profile", 'https://a.ppy.sh/'+user.id, 'https://osu.ppy.sh/u/'+user.id);
        if(user.pp.rank <= '10') { await emb.addField('Global Ranking', '#'+user.pp.rank+' 🏆', true) }
        if(user.pp.rank >= '10') { await emb.addField('Global Ranking', '#'+user.pp.rank, true) }
        await emb.addField('Local Ranking :flag_'+pais.toLowerCase()+':', '#'+user.pp.countryRank, true);
        await emb.addField('Performance Points', Math.round(user.pp.raw)+'pp', true);
        await emb.addField('Ranks', emoji('osuSS')+' '+user.counts.SS+' '+emoji('osuS')+' '+user.counts.S+' '+emoji('osuA')+' '+user.counts.A, true);
        await emb.addField('Ranked Score', numberWithCommas(user.scores.ranked), true);
        await emb.addField('Total Score', numberWithCommas(user.scores.total), true);
        await emb.addField('Level', Math.round(user.level), true);
        await emb.addField('Play Count', user.counts.plays, true);
        await emb.addField('Accuracy', user.accuracyFormatted, true);
        await emb.setFooter(msg.author.tag, msg.author.avatarURL);
        await emb.setThumbnail('https://a.ppy.sh/'+user.id);
        await msg.channel.send({embed:emb});
        await msg.channel.stopTyping();
    }).catch(async function(err) {
        await msg.channel.startTyping();
        await emb.setColor('#F03A17');
        await emb.addField('Error while fetching osu! player stats', err);
        await emb.setFooter(msg.author.tag, msg.author.avatarURL);
        await msg.channel.send({embed:emb});
        await msg.channel.stopTyping();
    });
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor('#EA5F9C');
        emb.setAuthor('osu! Commands', 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png', 'https://osu.ppy.sh');
        emb.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png');
        emb.addField('`-stats`', "Search for a user's stats\nUsage: `"+process.env.PREFIX+"osu -stats Cookiezi`");
        emb.addField('`-osusig`', "Search for a user's osu!sig\nUsage: `"+process.env.PREFIX+"osu -osusig Cookiezi`");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}