  const snekfetch = require('snekfetch');
   const Discord = require('discord.js');
  exports.run = async (client, message, args) => {
    const mentioned = message.mentions.users.first()
    if (!mentioned) {
    const avatar = mentioned.displayAvatarURL({format : 'png'})
    const pls = await snekfetch.get(`http://api.anidiots.guide/api/triggered/?avatar=${avatar}`).set("token", "Oe3S8aiv7D2gNWqj/oDv");
    await message.channel.send({ files: [{ attachment: pls.body, name: 'triggered.gif' }] });
} 
}
