const Discord = require('discord.js')
exports.run = async (client, message, args) => {
if (message.channel.type === "dm") return;
let args = message.content.split(" ").slice(1);
 	let args1 = args.join(' ');
let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
 if (!args) { 
return message.reply(':x: **Please, specify a thing that trump will make illegal**'); }
if (args.length > 1) {
return message.reply(':x: **Max 1 word**'); }
 message.channel.send({ files: [{ attachment: illegal, name: 'isnowillegal.gif' }] })
}
