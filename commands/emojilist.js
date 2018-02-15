exports.run = (client, msg, args) => {
      const emojiList = msg.guild.emojis.map(e => e.toString()).join(" ");
      const embed = new Discord.RichEmbed()
      .setColor("#75C0AC")
      .setTitle("Emoji Of This Server")
      .setDesciption(emojiList)
      msg.channel.send({embed});
}
