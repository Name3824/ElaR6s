const snekfetch = require('snekfetch');
const Discord = require('discord.js');

exports.run = (client, guild) => {

    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', process.env.DISCORDBOTLIST)
    .send({ server_count: client.guilds.size })
}
