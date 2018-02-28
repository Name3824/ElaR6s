const Discord = require('discord.js');
exports.run = (client, guild) => {
let users = guild.memberCount
let bots = guild.members.filter(m=>m.user.bot).size
let percent = Math.floor(bots / users * 10000) / 100;
 const emb = new Discord.RichEmbed();
  emb.setTitle(`${guild.name}`);
  emb.setAuthor('Joined Server');
  emb.setColor(0xffd954);
  emb.setFooter(``);
  emb.setTimestamp();
  emb.addField('Owner', `${guild.owner.user.tag} (${guild.owner.user.id})`);
  emb.addField('ID', `${guild.id}`);
  emb.addField('Members', `${guild.memberCount - guild.members.filter(m=>m.user.bot).size} (${guild.members.filter(m=>m.user.bot).size} bots)`, true);
  emb.addField('Percent', `${percent}%`);
  emb.addField('ID', `${guild.id}`, true);
client.channels.get('404280160452608000').send({embed:emb});
}
