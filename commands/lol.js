exports.run = (client, msg, args) => {
    const lol = args.join(" ");
    const request = require('request');
    const cheerio = require('cheerio');
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    const rotation = [];
    function emoji(emo) {
        delete require.cache[require.resolve(`../resources/emoji.js`)];
        let emojia = require("../resources/emoji.js");
        if (emojia[emo] === undefined) return "🅱";
        return emojia[emo];
    }
    if(lol.startsWith("-rotation")) {
        request('http://leagueoflegends.wikia.com/wiki/Free_champion_rotation', function (error, response, html) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);
                let obj = require('../resources/lol.json').data;
                let allchamps = Object.keys(obj).map(function(key) {
                    return obj[key];
                });
                $('.champion-icon').each(function (i, element) {
                    if (i < 14) {
                        let champ = element.attribs["data-champion"];
                        let c = allchamps.find(x=>x.name == champ)
                        let role = c? c.tags? c.tags[0]:"Specialist":"Specialist";
                        rotation.push([emoji(role),champ]);
                    }
                });
            } if(error) {
                msg.channel.startTyping();
                emb.setColor('#F03A17');
                emb.addField("Error while fetching this week's rotation", "Probably it's the API's fault.\nError: `"+error+"`");
                emb.setFooter(msg.author.avatarURL, msg.author.tag);
                msg.channel.send({embed:emb});
                msg.channel.stopTyping();
            }
                msg.channel.startTyping();
                emb.setColor('#064955')
                emb.setAuthor('League of Legends', 'https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343', 'http://leagueoflegends.wikia.com/wiki/League_of_Legends_Wiki');
                emb.setThumbnail("https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343");
                emb.setDescription('Weekly Champion Rotation');
                emb.addField("₪₪₪₪₪₪₪₪₪₪₪", `${rotation[0][0]}  ${rotation[0][1]}\n${rotation[1][0]}  ${rotation[1][1]}\n${rotation[2][0]}  ${rotation[2][1]}\n${rotation[3][0]}  ${rotation[3][1]}\n${rotation[4][0]}  ${rotation[4][1]}\n${rotation[5][0]}  ${rotation[5][1]}\n${rotation[6][0]}  ${rotation[6][1]}`, true);
                emb.addField("₪₪₪₪₪₪₪₪₪₪₪", `${rotation[7][0]}  ${rotation[7][1]}\n${rotation[8][0]}  ${rotation[8][1]}\n${rotation[9][0]}  ${rotation[9][1]}\n${rotation[10][0]}  ${rotation[10][1]}\n${rotation[11][0]}  ${rotation[11][1]}\n${rotation[12][0]}  ${rotation[12][1]}\n${rotation[13][0]}  ${rotation[13][1]}`, true);
                emb.setFooter(msg.author.tag, msg.author.avatarURL);
                msg.channel.send({embed:emb});
                msg.channel.stopTyping();
        });
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor('#064955');
        emb.setAuthor('League of Legends Commands', 'https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343', 'https://leagueoflegends.com');
        emb.setThumbnail('https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343');
        emb.addField('`-rotation`', "See the Weekly Champion Rotation\nUsage: `"+process.env.PREFIX+"lol -rotation`");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}