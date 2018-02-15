
const Discord = require("discord.js");
const weather = require("weather-js");
module.exports.run = async (client, message, args) => {
    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if (err) message.channel.send(err);
    if (result.length === 0) {
        message.channel.send("**Please enter a valid location.**")
        return;
    }
    var current = result[0].current;
    var location = result[0].location;
    var embedcolor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(embedcolor)
        .addField('Timezone',`UTC${location.timezone}`, true)
        .addField('Degree Type',location.degreetype, true)
        .addField('Temperatu',`${current.temperature} Degrees`, true)
        .addField('Feels Like', `${current.feelslike} Degrees`, true)
        .addField('Winds',current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true)
        .setFooter(`Requested by ${message.author.username}`)
        message.channel.send({embed: embed});
        });
}

module.exports.help = {
    name: "weather"
}
