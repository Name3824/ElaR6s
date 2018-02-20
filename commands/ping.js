exports.run = (client, msg, args) => { // eslint-disable-line no-unused-vars
  /*msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);*/
  const embed = {
  "title": "Ping command results",
  "description": `Pong! Here are the results of the \b!ping\` command`,
  "color": 4875195,
  "timestamp": new Date(),
  "footer": {
    "icon_url": msg.author.avatarURL(),
    "text": `b!ping`
  },
  "thumbnail": {
    "url": msg.author.avatarURL()
  },
  "author": {
    "name": `${client.user.username}`,
    "icon_url": msg.author.avatarURL()
  },
  "fields": [
    {
      "name": "Latency",
      "value": `${msg.createdTimestamp - msg.createdTimestamp}ms`,
      "inline": true
    },
    {
      "name": "API Latency",
      "value": `${Math.round(client.ping)}ms`,
      "inline": true
    }
  ]
};
msg.edit({ embed });
};
