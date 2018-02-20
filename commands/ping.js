const Discord = require('discord.js')
exports.run = (client, msg, args) => { // eslint-disable-line no-unused-vars
  /*msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);*/
  const embed = {
  "description": `**Pong!**:ping_pong:`,
  "color": 0xffd954,
  "timestamp": new Date(),
  "footer": {
    "icon_url": client.user.avatarURL,
    "text": `b!invite | b!help`
   },
  "thumbnail": {
    "url": client.user.avatarURL
  },
  "author": {
    "name": `${client.user.username}`
  },
  "fields": [
    {
      "name": "Bot Ping",
      "value": `${client.ping}`,
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
