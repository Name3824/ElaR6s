exports.run = (client, message, [fromlang, tolang, ...transtext]) => {
const translate = require('translate')
const iso = require('iso-639-1')
translate.engine = 'yandex';
translate.key = 'trnsl.1.1.20180128T124558Z.49ac467d37540a54.dad8b0c348f7c39abb96b009108be4f5d5f0a787';
const Discord = require('discord.js')
  const text = translate(transtext, { from: fromlang, to: tolang });
  var embed = new Discord.RichEmbed()
    .setTitle('Translation')
    .setDescription(`From ${fromlang} to ${tolang}`)
    .setColor(0xFF0000)
    .setThumbnail(message.member.avatarURL)
    .addField("Translated Text", text, true)
  message.channel.send(embed)
  console.log(text)
};
