if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.toString().replace(/^\s+|\s+$/g, '');
    };
  }
exports.run = (client, msg, args) => {
    const osu = require('node-osu');
    var user = args.join(" ");
    const osuApi = new osu.Api(process.env.OSU);
    function numberWithCommas(x) {
        const parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    if(user.endsWith("-osusig") || user.startsWith("-osusig")) {
        username = user.replace('-osusig', '').trim();
        if(!username) return msg.channel.send("That's not a valid user. Try with a valid one, for example `Cookiezi`");
        var url = 'https://lemmmy.pw/osusig/sig.php?uname=' + encodeURI(username);
        msg.channel.startTyping();
        msg.channel.send({embed: {
            color: 0xEA5F9C,
            image: {
                url: url
            },
            footer: {
                icon_url: msg.author.avatarURL,
                text: `${msg.author.tag}`
            }
        }});
        msg.channel.stopTyping();
    } else if(user.endsWith("-stats") || user.startsWith("-stats")){
    username = user.replace('-stats', '').trim();
    if(!username) return msg.channel.send("That's not a valid user. Try with a valid one, for example `Cookiezi`");
    osuApi.getUser({u: user}).then(user => {
        const pais = user.country;
        msg.channel.startTyping();
        msg.channel.send({embed:{
            color: 0xEA5F9C,
            author: {
                name: user.name+"'s profile",
                icon_url: "https://a.ppy.sh/"+user.id
            },
            fields: [
                {
                    name: "Global Ranking",
                    value: "#"+user.pp.rank,
                    inline: true
                },{
                    name: "Local Ranking",
                    value: "#"+user.pp.countryRank+" :flag_"+pais.toLowerCase()+":",
                    inline: true
                },{
                    name: "Performance Points",
                    value: Math.round(user.pp.raw)+"pp",
                    inline: true
                },{
                    name: "Ranks",
                    value: "<:osuSS:359800530383405057> "+user.counts.SS+" <:osuS:359808204022218753> "+user.counts.S+" <:osuA:359808219075313675> "+user.counts.A,
                    inline: true
                },{
                    name: "Ranked Score",
                    value: numberWithCommas(user.scores.ranked),
                    inline: true
                },{
                    name: "Total Score",
                    value: numberWithCommas(user.scores.total),
                    inline: true
                },{
                    name: "Level",
                    value: Math.round(user.level),
                    inline: true
                },{
                    name: "Play Count",
                    value: user.counts.plays,
                    inline: true
                },{
                    name: "Accuracy",
                    value: user.accuracyFormatted,
                    inline: true
                }
            ],
            footer: {
                icon_url: msg.author.avatarURL,
                text: `${msg.author.tag}`
            },
            thumbnail: {
                url: "https://a.ppy.sh/"+user.id
            }
        }});
        msg.channel.stopTyping();
    })
    } else if(!args[0]) {
        msg.channel.startTyping();
        msg.channel.send({embed: {
            color: 0xEA5F9C,
            author: {
                name: "osu! Commands",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png"
            },
            thumbnail: {
                url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Osu%21Logo_%282015%29.png"
            },
            fields: [
                {
                    name: "`-stats`",
                    value: "Search for a user's stats\nUsage: `"+process.env.PREFIX+"osu -stats Cookiezi`"
                },{
                    name: "`-osusig`",
                    value: "Search for a user's osu!sig\nUsage: `"+process.env.PREFIX+"osu -osusig Cookiezi`"
                }
            ],
            footer: {
                icon_url: msg.author.avatarURL,
                text: `${msg.author.tag}`
            },
        }});
        msg.channel.stopTyping();
    }
}