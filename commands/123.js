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
mainMessage.edit("", {embed: {
      color: Math.floor(Math.random()*16777216),
      author: {
                name: "Commande d'help",
                icon_url: message.guild.avatarURL
               },
    
          description: "📋 Affiche ce message\n👤Role disponible\n🎵Commande musique\n📡Information sur le serveur\n❓Information sur toi\n🛑 pour quitter",
              }
            }
)

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
