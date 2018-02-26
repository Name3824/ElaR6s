exports.run = async (client, msg, args) => { 
(async function() {
    const mainmsg = await msg.channel.send("", {embed: {
      color: Math.floor(Math.random()*16777216),
      author: {
                name: "Commande d'help",
                icon_url: msg.guild.avatarURL
               },
    
          description: "📋 Affiche ce message\n👤Role disponible\n🎵Commande musique\n📡Information sur le serveur\n❓Information sur toi\n🛑 pour quitter",
              }
            }
          )
  
              //await mainmsg.react("📋");
              //await mainmsg.react("👤");
              //await mainmsg.react("🎬");
              //await mainmsg.react("🙇");
              //await mainmsg.react("😃");
              //await mainmsg.react("⚙");
              //await mainmsg.react("🎵");
              //await mainmsg.react("📡");
              //await mainmsg.react("❓");
              //await mainmsg.react("⚒");
              await mainmsg.react("🛑");
  
  
              const panier = mainmsg.createReactionCollector((reaction, user) => user.id === msg.author.id);
               
              panier.on('collect', async(reaction) => 
              {
              if (reaction.emoji.name === "🛑") {
              
              mainmsg.delete()
              
               }
               await reaction.remove(msg.author.id);
  
              });
               }())
              }
            }

             });
