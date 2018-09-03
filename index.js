const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.LOGIN);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on('message', message => {
  const Discord = require("discord.js");
  const client = new Discord.Client();
    if (message.content === "!lol") {
        var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send("https://discord.gg/N9MQC4j"));
        } catch (err) {
            console.log("Could not send message to ");
        }
    }
});
client.on("message", msg => {
    if(!msg.guild || msg.author.bot || msg.content.indexOf(process.env.PREFIX) !== 0) return;
    if(!client.user.bot && msg.author.id !== process.env.OWNER) return;
    const args = msg.content.split(/\s+/g);
    const command = args.shift().slice(process.env.PREFIX.length).toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, msg, args);
    } catch (err) {
      console.log(err);
    }
});
