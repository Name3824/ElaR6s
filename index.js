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

client.on("message", msg => {
    if(!msg.guild || msg.author.bot || msg.content.indexOf(process.env.PREFIX) !== 0) return;
    if(!client.user.bot && msg.author.id !== process.env.OWNER) return;
    const args = msg.content.split(/\s+/g);
    const command = args.shift().slice(process.env.PREFIX.length).toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, msg, args);
      client.guilds.get("330439963193901056").channels.get("337921670796804099").send({embed:{color:0x46be30,author:{name: "Executed command", icon_url: msg.author.avatarURL},description:`**Command \`${command}\` was executed by \`${msg.author.tag}\` on \`${msg.guild.name}\`**`}});
    } catch (err) {
      console.log(err);
    }
});