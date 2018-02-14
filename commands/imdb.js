const Discord = require("discord.js");
const imdb = require('imdb');
const nameToImdb = require("name-to-imdb");
module.exports.run = async (client, message, args, level) => {
    let args2 = args.join(' ')
  let msg = await message.channel.send('**Searching..🔍**')
  nameToImdb({ name: args2 }, function(err, res, inf) { 
    let name = res
    if(err) {
        message.channel.sendEmbed(new Discord.RichEmbed()
            .addField('Error.', `Please make sure the search term is correct!`)
            .setColor(0xff5454)
        );
        return;
    }
    imdb(name, function(err, data) {
        if(err || !data.title) {
            message.channel.sendEmbed(new Discord.RichEmbed()
                .addField('Error.', `An error occured`)
                .setColor(0xff5454)
            );
            return;
        }
        if(data) {
        var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
          const embed = new Discord.RichEmbed()
            .setTitle(`Info for ${data.title}`)
            .addField('Year:', `${data.year}`, true)
            .addField('Rating:', `${data.contentRating}`, true)
            .addField('Length:', `${data.runtime}`, true)
            .addField('Description:', `${data.description}`, true)
            .addField('Rating:', `${data.rating}/10`, true)
            .addField('Genre(s):', `${data.genre.join(', ')}`, true)
            .addField('Director:', `${data.director}`, true)
            .addField('Metascore:', `${data.metascore}/100`, true)
            .addField('Writer:', `${data.writer}`, true)
            .setThumbnail(data.poster)
            .setColor("#75C0AC")
            .setFooter("Powered With ImDb");
          msg.edit({embed});
        }
    });
});
}
