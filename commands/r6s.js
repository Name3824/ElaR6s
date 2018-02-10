const RainbowSix = require('rainbowsix-api-node');
const r6 = new RainbowSix();
const platforms = ['UPLAY', 'XONE', 'PS4'];
const Discord = require('discord.js');
function platform(query) {
    if(query == 'UPLAY') return '1';
    else if(query == 'PS4') return '2';
    else if(query == 'XONE') return '3';
}

exports.run = (client, msg, args) => {
    const emb = new Discord.RichEmbed();
    const strings = args.join(" ");
    if(strings.startsWith('-player')) {
         r6.stats(args[1], args[0]).then(data => {
                let stats = [
      {
        name: 'Player Name',
        value: data.player.username
      },
      {
        name: 'Level',
        value: `${data.player.stats.progression.level}`,
        inline: true
      },
      {
        name: 'XP',
        value: `${data.player.stats.progression.xp}`,
        inline: true
      }
    ];
    if (data.player.stats.ranked.has_played) {
      stats.push(
        {
          name: 'Ranked',
          value: `${args[1]} has played Ranked games for **${(data.player.stats.ranked.playtime / 60 / 60).toFixed(2)}** Hours.`
        },
        {
          name: 'Wins',
          value: `${data.player.stats.ranked.wins}`,
          inline: true
        },
        {
          name: 'Losses',
          value: `${data.player.stats.ranked.losses}`,
          inline: true
        },
        {
          name: 'Kills',
          value: `${data.player.stats.ranked.kills}`,
          inline: true
        },
        {
          name: 'Deaths',
          value: `${data.player.stats.ranked.deaths}`,
          inline: true
        },
        {
          name: 'Win/Lose Ratio',
          value: `${data.player.stats.ranked.wlr}`,
          inline: true
        },
        {
          name: 'Kill/Death Ratio',
          value: `${data.player.stats.ranked.kd}`,
          inline: true
        }
      );
    }
             msg.channel.send({
                   embed: {
        color: 0xffffff,
        title: 'Rainbow 6',
        url: `https://r6stats.com/stats/${args[0]}/${encodeURIComponent(args[1])}`,
        fields: stats,
        thumbnail: {
          url: 'https://vignette1.wikia.nocookie.net/rainbowsix/images/0/06/Rainbow_(Clear_Background)_logo.png'
        }
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
