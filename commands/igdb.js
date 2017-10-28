exports.run = (client, msg, args) => {
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
          return this.toString().replace(/^\s+|\s+$/g, '');
        };
    }
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    const query = args.join(" ");
    const igdb = require('igdb-api-node').default;
    const Igdb = igdb(process.env.IGDB);
    if(query.startsWith('-game')) {
        game = query.replace('-game', '').trim();
        Igdb.games({
            limit: 1,
            fields: '*',
            search: game
        }).then(response => {
            msg.channel.startTyping();
            const obj = response.body[0];
            emb.setAuthor(obj.name+" [ID "+obj.id+"]", Igdb.image({ cloudinary_id: obj.cover.cloudinary_id}, 'thumb_2x', 'png'), obj.url);
            emb.setThumbnail(Igdb.image({ cloudinary_id: obj.cover.cloudinary_id}, 'screenshot_huge', 'png'));
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            emb.setColor("#00DF6C");
            emb.addField('Summary:', obj.summary, true);
            emb.addField('Rating:', Math.floor(obj.rating)+"/100 in "+obj.rating_count+" ratings", true);
            emb.addField('ESRB Rating:', obj.esrb.rating, true);
            emb.addField('PEGI Rating:', obj.pegi.synopsis, true);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        }).catch(error => {
            throw error;
        });
    } else if(query.startsWith('-platform')) {
        platform = query.replace('-platform', '').trim();
        Igdb.platforms({
            limit: 1,
            fields: '*',
            search: platform
        }).then(response => {
            msg.channel.startTyping();
            const obj = response.body[0];
            emb.setAuthor(obj.name+" [ID "+obj.id+"]", Igdb.image({ cloudinary_id: obj.logo.cloudinary_id}, 'thumb_2x', 'png'), obj.url);
            emb.setThumbnail(Igdb.image({ cloudinary_id: obj.logo.cloudinary_id}, 'screenshot_huge', 'png'));
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            emb.setColor('#00DF6C');
            emb.addField('Also known as:', obj.alternative_name, true);
            emb.addField('Summary:', obj.summary, true);
            emb.addField('Generation:', obj.generation+'th Generation', true);
            emb.addField('Official '+obj.name+' Website:', '[Click here]('+obj.website+')', true);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping();
        }).catch(error => {
            throw error;
        });
    } else if(!args[0]) {
        msg.channel.startTyping();
        msg.channel.send({embed: {
            color: 0x00DF6C,
            author: {
                name: "Internet Game Database [IGDB] Commands",
                icon_url: "https://www.igdb.com/preview_image.png"
            },
            thumbnail: {
                url: "https://www.igdb.com/preview_image.png"
            },
            fields: [
                {
                    name: "`-game`",
                    value: "Search for a game in IGDB\nUsage: `"+process.env.PREFIX+"igdb -game Halo 4`"
                },{
                    name: "`-platform`",
                    value: "Search for a platform in IGDB\nUsage: `"+process.env.PREFIX+"igdb -platform Playstation 4`"
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