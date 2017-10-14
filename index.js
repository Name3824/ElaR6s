const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config()
client.login(process.env.LOGIN);

client.on('ready', () => {
    console.log("Roady.");
    client.user.setGame(" | g?help");
});

client.on("message", msg => {
    if(!msg.guild || msg.author.bot || msg.content.indexOf(process.env.PREFIX) !== 0) return;
    if(!client.user.bot && msg.author.id !== "216901800899510272") return;
    const args = msg.content.split(/\s+/g);
    const command = args.shift().slice(process.env.PREFIX.length).toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, msg, args, process.env);
      msg.react("✅");
    } catch (err) {
      console.log(err);
      msg.react("❓");
    };
});