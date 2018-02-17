const Discord = require('discord.js');
const DBL = require("dblapi.js");
exports.run = (client, guild) => {
client.dbl = new DBL(process.env.DISCORDBOTLIST, client);
client.dbl.postStats(client.guilds.size)
  .then(() => console.log('Updated discordbots.org stats.'));
