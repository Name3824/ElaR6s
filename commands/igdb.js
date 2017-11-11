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
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Game not found', 'Try with a valid one, for example `Halo 4`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping(true);
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
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Platform not found', 'Try with a valid one, for example `Playstation 4`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping(true);
        });
    } else if(!args[0]) {
        msg.channel.startTyping();
        emb.setColor('#00DF6C');
        emb.setAuthor('Internet Game Database [IGDB] Commands', 'https://www.igdb.com/preview_image.png', 'https://igdb.com');
        emb.setThumbnail('https://www.igdb.com/preview_image.png');
        emb.addField('`-game`', "Search for a game in IGDB\nUsage: `"+process.env.PREFIX+"igdb -game Halo 4`");
        emb.addField('`-platform`', "Search for a platform in IGDB\nUsage: `"+process.env.PREFIX+"igdb -platform Playstation 4`");
        emb.setFooter(msg.author.tag, msg.author.avatarURL);
        msg.channel.send({embed:emb});
        msg.channel.stopTyping();
    }
}