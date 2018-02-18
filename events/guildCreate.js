exports.run = (client, guild) => {
let users = guild.memberCount
let bots = guild.members.filter(m=>m.user.bot).size
let percent = Math.floor(bots / users * 10000) / 100;
const embed = new Discord.RichEmbed()
  .setTitle(`${guild.name}`)
  .setAuthor('Joined Server')
  .setColor(0xffd954)
  .setFooter(``)
  .setTimestamp()
  .addField('Owner', `${guild.owner.user.tag} (${guild.owner.user.id})`)
  .addField('Members', `${guild.memberCount - guild.members.filter(m=>m.user.bot).size} (${guild.members.filter(m=>m.user.bot).size} bots)`, true)
  .addField('Percent', `${percent}%`)
  .addField('ID', `${guild.id}`, true)
client.channels.get('404280160452608000').send({embed})
}
