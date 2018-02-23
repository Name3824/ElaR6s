const Discord = require('discord.js');

exports.run = (client, message) => {
   var urlExpander = require('expand-url');
    let args = message.content.split(" ").slice(1);
    var url2 = message.content.slice(message.content.indexOf(message.content.split(" ")[1]))
    urlExpander.expand(url2, function(err, longUrl){
      const embed = new Discord.RichEmbed()
      .setColor(0x2ce88e)
      .addField('Shortened URL', message.content.slice(message.content.indexOf(message.content.split(" ")[1])))
      .addField('Un-Shortened URL', "<"+ longUrl + ">")
      return message.reply({embed}).then(message => message.delete(30000))
    }
}
