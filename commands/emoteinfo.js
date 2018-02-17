const Discord = require("discord.js");

exports.run = (client, message, args) => {
  // emoji check
  if (!message.content.includes("<") && !message.content.includes(":") && !message.content.includes(">")) return message.reply(":x: **No emoji specified.**");

  // setting emoji
  let emoji = message.content.split("<").slice(1).join(" ").split(":").slice(2).join(" ").split(">").slice(0).join(" ").replace(/ /g, "");
  console.log(emoji); // debug
  
  // checking if emoji is a global one
  if (!message.guild.emojis.get(emoji)) return message.reply(":x: **Can't find emoji, make sure it is not a global one.**\n**Image Preview Avaliable✔**", {files: ["https://cdn.discordapp.com/emojis/" + emoji + ".png"]});
  
  // finising emoji setup
  emoji = client.emojis.get(emoji);
  
  // role data
  let roles = emoji.roles.map(r=>r.name).join(", ");
  if (!roles || roles === "") roles = "None";
  if (roles.length > 1999) roles = "Too much roles, can't display.";
  
  // creating embed
  const embed = new Discord.RichEmbed()
    .setAuthor(emoji.name, emoji.url)
    .addField("Emoji ID", emoji.id)
    .setColor("#ffd954")
    .addField("Usage", `${emoji.toString()} \`:${emoji.name}:\``)
    .addField("Server", emoji.guild.name)
    .addField("Roles", roles)
    .addField("Created At", emoji.createdAt)
    .setImage(emoji.url);
   message.channel.send({embed});
}
