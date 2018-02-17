  exports.run = async (client, message, args) => {
    message.mentions.users.first() !== undefined ? person = message.mentions.users.first() : person = message.author
    const avatar = person.displayAvatarURL({format : 'png'})
    const pls = await snekfetch.get(`http://api.anidiots.guide/api/triggered/?avatar=${avatar}`).set("token", "Oe3S8aiv7D2gNWqj/oDv");
    await message.channel.send({ files: [{ attachment: pls.body, name: 'triggered.gif' }] });
} 
