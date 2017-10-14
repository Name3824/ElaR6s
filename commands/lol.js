exports.run = (client, msg, args) => {
    const lol = args.join(" ");
    const request = require('request');
    const cheerio = require('cheerio');
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    const rotation = [];
    if(lol.startsWith("-rotation")) {
        request('http://leagueoflegends.wikia.com/wiki/Free_champion_rotation', function (error, response, html) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);
                $('span.champion-icon').each(function (i, element) {
                    var a = $(this).children()[1]
                        if (i < 10) {
                            rotation.push(a.children[0].attribs.title);
                        }
                    });
                    console.log(rotation)
                }
                msg.channel.startTyping();
                emb.setColor('#395790')
                emb.title = "League of Legends"
                emb.setThumbnail("https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343")
                emb.description = "Weekly Champion Rotation"
                for (i = 0; i < rotation.length; i++) {
                    emb.addField(rotation[i], `___________________________`, true)
                }
                msg.channel.send({embed:emb});
                msg.channel.stopTyping();
        });
    } else if(!args[0]) {
        msg.channel.startTyping();
        msg.channel.send({embed: {
            color: 0x395790,
            author: {
                name: "League of Legends Commands",
                icon_url: "https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343"
            },
            thumbnail: {
                url: "https://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343"
            },
            fields: [
                {
                    name: "`-rotation`",
                    value: "See the Weekly Champion Rotation\nUsage: `"+process.env.PREFIX+"lol -rotation`"
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