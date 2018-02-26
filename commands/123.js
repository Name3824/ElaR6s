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
  
              await mainmsg.react("📋");
              await mainmsg.react("👤");
              //await mainmsg.react("🎬");
              //await mainmsg.react("🙇");
              //await mainmsg.react("😃");
              //await mainmsg.react("⚙");
              await mainmsg.react("🎵");
              await mainmsg.react("📡");
              await mainmsg.react("❓");
              await mainmsg.react("⚒");
              await mainmsg.react("🛑");
  
  
              const panier = mainmsg.createReactionCollector((reaction, user) => user.id === msg.author.id);
               
              panier.on('collect', async(reaction) => 
              {
                if (reaction.emoji.name === "📋") {  
                  mainmsg.edit('', {embed: {
                  color: Math.floor(Math.random()*16777216),
                  author: {
                            name: "Commande d'help parti 1",
                            icon_url: msg.guild.avatarURL
                           },
                
                description: "📋 Affiche ce message\n👤Role disponible\n🎵Commande musique\n📡Information sur le serveur\n❓Information sur toi\n🛑 pour quitter",
                     
                }
            })
          }
               if (reaction.emoji.name === "👤") {
                  mainmsg.edit('', {embed: {
                      color: Math.floor(Math.random()*16777216),
                      fields: [{
                          name: "Les **Rôles** Disponible sur le serveur",
                          value: "Liste des rôles\nJoueur DayZ\nJoueur Faction\nJoueur DayZ\n```/role Joueur Build```\n```/role Joueur Faction```\n```/role Joueur Build```",
                          inline : true
                        },
                      ],
                      footer: {
                          icon_url: client.user.avatarURL,
                          text: "©️ Chtigaming And Moding"
                        }
                  }
              })
          }
  
  if(reaction.emoji.name === "📡"){
      mainmsg.edit('', {embed: {
                    color : Math.floor(Math.random()*16777216),
            author :{name: msg.author.name},
                    description : "",
                     title : "Information serveur",
                     fields : [
                   {
                   name : '**Nom du Serveur**',
                   value : msg.guild.name,
                   inline : true
                   },{
                   name : '**Propriétaire**',
                   value : msg.guild.owner.user.tag,
                   inline : true
                  },{
                    name : '**Niveau de Vérification**',
                    value : msg.guild.verificationLevel,
                    inline : true
                  },{
                   name : '**Région**',
                   value : msg.guild.region,
                   inline : true
                  },{
                    name : '**Nombre de Membres**',
                    value : msg.guild.memberCount,
                    inline : true
                  },{
                    name : '**Humain **',
                    value : msg.guild.members.filter(m => ! m.user.bot).size,
                    inline : true
                  },{
                    name : '**Bot**',
                    value : msg.guild.members.filter(m => m.user.bot).size,
                    inline : true
                  },{
                  name : '**Utilsation de la RAM**',
                  value : (Math.round(process.memoryUsage().rss / 1024 / 1000)+'MB'),
                  inline : true
                }

        ],
            },
             footer: {
                 text : '©️ Chtigaming And Moding'
              }
          })
      }
  
      var moment = require("moment");
      moment.locale("fr");
    var temps = moment(msg.createdTimestamp).format("LLLL");
    var memberavatar = msg.author.avatarURL
    var membername = msg.author.username
    var mentionned = msg.mentions.users.first();
      var getvalueof;
      if(mentionned){
      var getvalueof = mentionned;
      }else {
      var getvalueof = msg.author;
      }
      if(getvalueof.bot == true){
      var checkbot = "Bot";
      }else {
      var checkbot = "Non Bot";
    if (getvalueof.presence.status == 'online') {
          var etat = "En Ligne";
      } else if (getvalueof.presence.status == "offline"){
          var etat = "Invisible";
      } else if (getvalueof.presence.status == "idle"){
          var etat = "Inactif";
      } else if(getvalueof.presence.status == "dnd"){
          var etat = "Ne pas déranger";
      }
    if(getvalueof.presence.game === null) {
          var gamepresence = "Rien"
       } else {
          var gamepresence = getvalueof.presence.game.name
      } 
      if(reaction.emoji.name === "❓"){
          mainmsg.edit('', {embed: {
              color: Math.floor(Math.random()*16777216),     
              
      type: "rich",
       description: '',
          fields: [{
        name: "Pseudo Discord:",
       value: getvalueof.username + "#" + getvalueof.discriminator,
      inline: true
      },{
      name: "Pseudo Serveur:",
      value: getvalueof + " ",
      inline: true    
       },{        
       name: "ID de l'utilisateur:",
       value: getvalueof.id,
       inline: true      
        },{        
       name: "Joue à:",
       value: gamepresence,
       inline: true  
       },{
      name: "Statut:",
       value: etat,
       inline: true
      },{          
      name: "Sur le server depuis:",
      value: "le " + moment(msg.guild.members.get(getvalueof.id).joinedAt).format("LL"),
       inline: true
      },{ 
      name: "Sur discord depuis:",
      value: "le " + moment(getvalueof.createdAt).format("LL"),
      inline: true
      },{
      name: "description des rôles :",
      value: "`\n" + msg.guild.members.get(getvalueof.id).roles.array().map(g => "" + g.name + "").join(', ') + " `\n",
      inline: true
    }],
  },
   footer: {
       text : '©️ Chtigaming And Moding'
    }
  })
  
  }
      }
  
      if (reaction.emoji.name === "⚒") {
        mainmsg.edit('', {embed: {
            color: Math.floor(Math.random()*16777216),     
            description : "",
                     title : "Information serveur",
                     fields : [
                   {
                       name: "Commande de modération require le grade **mod**",
                       value: "**/ban** @pseudo\n**/kick**@pseudo\n**/purge** nombre de message\n**/purge** nombre de message pseudo",
                 
            }
        ]}
        })
      }

      if (reaction.emoji.name === "🎵") {
        mainmsg.edit('', {embed: {
            color: Math.floor(Math.random()*16777216),
            fields: [{
                name: "Commande Musique",
                value: "/play lien ou titre\n/pause metre en pause\n\n/resume reprendre la musique\n/queue pour voir la file d'attentes\n\n/skip changer de musique\n/clearQ efface tout les music en file d'attente\n\n/leave fait quitté le bot du channel\n/volume change de volume **min 1 max 100**",
                inline : true
              },
            ],
            footer: {
                icon_url: client.user.avatarURL,
                text: "©️ Chtigaming And Moding"
              }
        }
    })
}
              if (reaction.emoji.name === "🛑") {
              
              mainmsg.delete()
              
               }
               await reaction.remove(msg.author.id);
  
              });
               }());
              }
            }
