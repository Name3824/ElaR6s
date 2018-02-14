const Discord = require("discord.js");
const moment = require('moment');
const cooldown = new Set();
module.exports.run = async (client, message, args) => {
    args = message.content.split(' ').slice(1).join(' ');
    message.delete();

    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply('**[COOLDOWN]** Feedback command has **5 Minutes** Cooldown!');
    }
    if (args.length < 1) {
        return message.reply('You must supply me full feedback!');
    }
    cooldown.add(message.author.id && message.guild.id);

    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = client.channels.get("400712231135870986");
    message.reply('Hey we got your feedback thank you for your suggestions. We hope you didn\'t send spam words:');
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Feedback from ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Feedback:', `**Feedback's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full Feedback:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter("Powered by Uzumaki-Clan")
  .setColor(16711728);
    message.channel.send({embed: embed2});
    const embed = new Discord.RichEmbed()
  .setAuthor(`Feedback from ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Feedback:', `**Feedback's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full Feedback:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter("Powered by Uzumaki-Clan")
  .setColor(16711728);
    cnl.send({embed})
  .catch(e => logger.error(e))
// In your command
};
