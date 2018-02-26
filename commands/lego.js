
const Discord = require('discord.js')
exports.run = async (client, message, args) => { 
(async function() {

 const mainMessage = await message.channel.send("", {embed: {
      color: Math.floor(Math.random()*16777216),
      author: {
                name: "Commande d'help",
                icon_url: message.guild.avatarURL
               },
    
          description: "📋 Affiche ce message\n👤Role disponible\n🎵Commande musique\n📡Information sur le serveur\n❓Information sur toi\n🛑 pour quitter",
              }
            }
);

await mainMessage.react("⬅️");
await mainMessage.react("➡️");
await mainMessage.react("🛑");

const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
 
panier.on('collect', async(reaction) => 
{
 if (reaction.emoji.name === "⬅️") {
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
if (reaction.emoji.name === "➡️") {

mainMessage.edit("Test reazioni:\n **Page.2**");
 
}
if (reaction.emoji.name === "🛑") {

mainMessage.delete()

 }

 await reaction.remove(message.author.id);

});
 }());
}
