const snekfetch = require('snekfetch');
exports.run = (client, message, args) => {
  person = message.mentions.users.first()
  const avatar = person.displayAvatarURL({format : 'png'})
  const pls = await snekfetch.get(`http://api.anidiots.guide/api/wanted/?avatar=${avatar}`).set("token", "Oe3S8aiv7D2gNWqj/oDv");
  await message.channel.send({ files: [{ attachment: pls.body, name: 'wanted.jpg' }] });
}
