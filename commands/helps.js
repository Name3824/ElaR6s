    exports.run = (client, message, args) => {
(async function() {

 const mainMessage = await message.channel.send("Test des réactions:\n **Page.1**");

await mainMessage.react("◀");
await mainMessage.react("▶");
await mainMessage.react("🛑");

const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
 
panier.on('collect', async(reaction) => 
{
 if (reaction.emoji.name === "◀") {

mainMessage.edit("Test des réactions:\n **Page.1**");

 }
if (reaction.emoji.name === "▶") {

mainMessage.edit("Test des réactions:\n **Page.2**");
 
}
if (reaction.emoji.name === "🛑") {

mainMessage.delete()

 }

 await reaction.remove(message.author.id)
    })
});
 }());
}
