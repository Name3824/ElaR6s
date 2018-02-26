exports.run = (client, msg, args) => { 
(async function() {
    const mainmsg = await msg.channel.send("lol")
  
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
  
              })
               })
              }
