const Discord = require('discord.js');
const igdb = require('igdb-api-node').default;
const Igdb = igdb(process.env.IGDB);

exports.run = (client, msg, args) => {
    const emb = new Discord.RichEmbed();
    const query = args.join(" ");
    if(query.startsWith('-game')) {
        game = query.replace('-game', '').trim();
        if(!game) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Game not found', 'Try with a valid one, for example `Halo 4`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping(true);
        }
        Igdb.games({
            limit: 1,
            fields: '*',
            search: game
        }).then(async function(response) {
            const obj = response.body[0];
            await msg.channel.startTyping();
            await emb.setAuthor(obj.name+" [ID "+obj.id+"]", Igdb.image({ cloudinary_id: obj.cover.cloudinary_id}, 'thumb_2x', 'png'), obj.url);
            await emb.setThumbnail(Igdb.image({ cloudinary_id: obj.cover.cloudinary_id}, 'screenshot_huge', 'png'));
            await emb.setFooter(msg.author.tag, msg.author.avatarURL);
            await emb.setColor("#00DF6C");
            await emb.addField('Summary:', obj.summary, true);
            await emb.addField('Rating:', Math.floor(obj.rating)+"/100 in "+obj.rating_count+" ratings", true);
            await emb.addField('ESRB Rating:', obj.esrb.rating, true);
            await emb.addField('PEGI Rating:', obj.pegi.synopsis, true);
            await msg.channel.send({embed:emb});
            await msg.channel.stopTyping();
        });
    } else if(query.startsWith('-platform')) {
        platform = query.replace('-platform', '').trim();
        if(!platform) {
            msg.channel.startTyping();
            emb.setColor('#F03A17');
            emb.addField('Game not found', 'Try with a valid one, for example `Halo 4`');
            emb.setFooter(msg.author.tag, msg.author.avatarURL);
            msg.channel.send({embed:emb});
            msg.channel.stopTyping(true);
        }
        Igdb.platforms({
            limit: 1,
            fields: '*',
            search: platform
        }).then(async function(response) {
            const obj = response.body[0];
            await msg.channel.startTyping();
            await emb.setAuthor(obj.name+" [ID "+obj.id+"]", Igdb.image({ cloudinary_id: obj.logo.cloudinary_id}, 'thumb_2x', 'png'), obj.url);
            await emb.setThumbnail(Igdb.image({ cloudinary_id: obj.logo.cloudinary_id}, 'screenshot_huge', 'png'));
            await emb.setFooter(msg.author.tag, msg.author.avatarURL);
            await emb.setColor('#00DF6C');
            await emb.addField('Also known as:', obj.alternative_name, true);
            await emb.addField('Summary:', obj.summary, true);
            await emb.addField('Generation:', obj.generation+'th Generation', true);
            await emb.addField('Official '+obj.name+' Website:', '[Click here]('+obj.website+')', true);
            await msg.channel.send({embed:emb});
            await msg.channel.stopTyping();
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