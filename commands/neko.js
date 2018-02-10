const snek = require("snekfetch");

exports.run = async (client, message, args) => {
    try {
      if (!message.channel.nsfw) return message.reply("🔞 You are not in NSFW channel.");
      const msg = await message.channel.send(`**${message.member.displayName}** is looking for a feline...`);
      const { body } = await snek.get(`https://nekos.life/api${Math.random() >= 0.5 ? "/lewd" : ""}/neko`);
      message.channel.send({ embed: { image: { url: body.neko } } });
      await msg.delete();
    } catch (e) {
      client.log(e);
    }
  }
