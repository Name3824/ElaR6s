const Discord = require('discord.js')
exports.run = (client, msg, args) => { // eslint-disable-line no-unused-vars
  /*msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);*/
  const embed = {
  "title": "Ping command results",
  "description": `**Pong!**:ping_pong:`,
  "color": "#ffd954",
  "timestamp": new Date(),
  "footer": {
    "text": `b!invite | b!help`
  },
  "author": {
    "name": `${client.user.username}`
  },
  "fields": [
    {
      "name": "Latency",
      "value": `${Date.now() - startTime}ms`,
      "inline": true
    },
    {
      "name": "API Latency",
      "value": `${Math.round(client.ping)}ms`,
      "inline": true
    }
  ]
};
msg.channel.send({ embed });
};
