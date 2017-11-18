const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
const emb = new Discord.RichEmbed();
require('dotenv').config()
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
    } catch (err) {
      msg.channel.startTyping();
      emb.setColor("#F03A17");
      msg.channel.send('Invalid Command.', 'To see a list of valid commands, type `g?help`');
      emb.setFooter(msg.author.tag, msg.author.avatarURL);
      msg.channel.send({embed:emb});
      msg.channel.stopTyping(true);
    }
});