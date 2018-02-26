exports.run = async (client, message, args) => { 
(async function() {

 const mainMessage = await message.channel.send("Test pagina 1:\n **Page.1**");

await mainMessage.react("1️⃣");
await mainMessage.react("2️⃣");
await mainMessage.react("🛑");

const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
 
panier.on('collect', async(reaction) => 
{
 if (reaction.emoji.name === "1️⃣") {
const embed = new Discord.RichEmbed()
embed.setAuthor(client.user.tag, client.user.avatarURL)
embed.setThumbnail(client.user.avatarURL)
embed.setDescription("<:oof:402924395779194880> **Test**\n**Usage**:\n**Pagina.1**")
embed.setColor("#ffd954")
mainMessage.edit({embed});

 }
if (reaction.emoji.name === "2️⃣") {

mainMessage.edit("Test reazioni:\n **Page.2**");
 
}
if (reaction.emoji.name === "🛑") {

mainMessage.delete()

 }

 await reaction.remove(message.author.id);

});
 }());
}
