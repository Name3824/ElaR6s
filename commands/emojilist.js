const Discord = require('discord.js')
exports.run = (client, msg, args) => {
      const emojiList = msg.guild.emojis.map(e => e.toString()).join(" ");
    const emb = new Discord.RichEmbed();
      emb.setColor("#75C0AC");
      emb.setTitle("Emoji Of This Server");
      emb.setDesciption(emojiList);
      msg.channel.send({embed:emb});
}
