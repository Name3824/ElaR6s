const snekfetch = require('snekfetch');
exports.run = (client, message, args) => {
  message.mentions.users.first() !== undefined ? person = message.mentions.users.first() : person = message.author
  const avatar = person.displayAvatarURL({format : 'png'})
  const pls = await snekfetch.get(`http://api.anidiots.guide/api/wanted/?avatar=${avatar}`).set("Oe3S8aiv7D2gNWqj/oDv");
  await message.channel.send({ files: [{ attachment: pls.body, name: 'wanted.jpg' }] });
}
