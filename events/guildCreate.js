const snekfetch = require('snekfetch');
const Discord = require('discord.js');

exports.run = (client, guild) => {
	snekfetch.post(`https://discordbots.org/api/bots/stats`)
  .set('Authorization', process.env.DISCORDBOTLIST)
  .send({ server_count: client.guilds.size })
  console.log('Updated discordbots.org stats.')
  console.error(`Whoops something went wrong: ${err.body}`)
}
