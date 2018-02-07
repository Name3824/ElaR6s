const request = require('request');
const cheerio = require('cheerio');
const Discord = require('discord.js');
const rotation = [];
function emoji(emo) {
    delete require.cache[require.resolve(`../resources/emoji.js`)];
    let emojia = require("../resources/emoji.js");
    if (emojia[emo] === undefined) return "🅱";
    return emojia[emo];
}

exports.run = (client, msg, args) => {
    const emb = new Discord.RichEmbed();
    const lol = args.join(" ");
    if(lol.startsWith("-rotation")) {
        request('http://leagueoflegends.wikia.com/wiki/Free_champion_rotation', async function (error, response, html) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);
                let obj = require('../resources/lol.json').data;
                let allchamps = Object.keys(obj).map(function(key) {
                    return obj[key];
                });
                await $('.champion-icon').each(async function (i, element) {
                    if (i < 14) {
                        let champ = element.attribs["data-champion"];
                        let c = allchamps.find(x=>x.name == champ)
                        let role = c? c.tags? c.tags[0]:"Specialist":"Specialist";
                        await rotation.push([emoji(role),champ]);
                    }
                });
            } if(error) {
                await msg.channel.startTyping();
                await emb.setColor('#F03A17');
                await emb.addField("Error while fetching this week's rotation", "Probably it's the API's fault.\nError: `"+error+"`");
                await emb.setFooter(msg.author.avatarURL, msg.author.tag);
                await msg.channel.send({embed:emb});
                await msg.channel.stopTyping();
            }
                await msg.channel.startTyping();
                await emb.setColor('#064955')
                await emb.setAuthor('League of Legends', 'https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343', 'http://leagueoflegends.wikia.com/wiki/League_of_Legends_Wiki');
                await emb.setThumbnail("https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343");
                await emb.setDescription('Weekly Champion Rotation');
                await emb.addField("₪₪₪₪₪₪₪₪₪₪₪", `${rotation[0][0]}  ${rotation[0][1]}\n${rotation[1][0]}  ${rotation[1][1]}\n${rotation[2][0]}  ${rotation[2][1]}\n${rotation[3][0]}  ${rotation[3][1]}\n${rotation[4][0]}  ${rotation[4][1]}\n${rotation[5][0]}  ${rotation[5][1]}\n${rotation[6][0]}  ${rotation[6][1]}`, true);
                await emb.addField("₪₪₪₪₪₪₪₪₪₪₪", `${rotation[7][0]}  ${rotation[7][1]}\n${rotation[8][0]}  ${rotation[8][1]}\n${rotation[9][0]}  ${rotation[9][1]}\n${rotation[10][0]}  ${rotation[10][1]}\n${rotation[11][0]}  ${rotation[11][1]}\n${rotation[12][0]}  ${rotation[12][1]}\n${rotation[13][0]}  ${rotation[13][1]}`, true);
                await emb.setFooter(msg.author.tag, msg.author.avatarURL);
                await msg.channel.send({embed:emb});
                await msg.channel.stopTyping();
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