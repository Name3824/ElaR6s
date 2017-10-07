const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.login(config.login);

client.on('ready', () => {
    console.log("Roady.");
    client.user.setGame(" | g?help");
});

client.on("message", msg => {
    if(!msg.guild || msg.author.bot || msg.content.indexOf(config.prefix) !== 0) return;
    const args = msg.content.split(/\s+/g);
    const command = args.shift().slice(config.prefix.length).toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, msg, args, config);
      msg.react("✅");
    } catch (err) {
      console.log(err);
      msg.react("❓");
    };
});