const translate = require('google-translate-api');
const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    const embed = new Discord.RichEmbed();
    const text = args.join(" ");
    translate(text, {to: 'en'}).then(async function(res) {
       await msg.channel.startTyping();
       await embed.setColor('#46BE30');
       await embed.setDescription(":flag_"+res.from.language.iso+": ➤ *"+text+"*\n:flag_us: ➤ *"+res.text+"*");
       await embed.setFooter(msg.author.tag, msg.author.avatarURL);
       await msg.channel.send({embed:embed});
       await msg.channel.stopTyping();
   }).catch(async function(err) {
       await msg.channel.startTyping();
       await msg.channel.send("**:x: | ERRO**\n```"+err+"```");
       await msg.channel.stopTyping();
   });
}
