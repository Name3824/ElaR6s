const discord = require("discord.js");
const translate = require('google-translate-api');
exports.run = async (client, msg, args) => {
  const [lang, ...txt] = await args;
  const string = String(txt)
  try{
    await translate(/*"Hello world"*/string, { to: lang }).then(translation => {
      const embed = new discord.MessageEmbed()
        .setTitle("Goomba Translator")
        .setColor(msg.guild.me.roles.highest.color || "0xb22222")
        .addField(`:flag_${translation.from.language.iso == "en" ? "us" : translation.from.language.iso == "ko" ? "kr" : translation.from.language.iso}: **Original Text**`, txt)
        .addField(`:flag_${lang == "en" ? "us" : lang == "ko" ? "kr" : lang}: **Translated Text**`, translation.text)
      msg.channel.send(embed);
    });
  } catch(e){
    console.log(e)
    msg.channel.send("There was an error whilst translating your text. Be sure you entered correctly the language. (List of supported languages: http://how.evie-banned.me/ezuguwinoy.scala)")
  }
}
