const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setTitle("List Of Servers")
    .setColor("#ffd954")
    .setDescription(client.guilds.map(g=>g.name).join(", "));
  if (embed.description.length > 1998) return message.reply("**Discord API Error**\nCan't send large messages.");
  message.channel.send({embed});
};
