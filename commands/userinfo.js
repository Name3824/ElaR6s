const Discord = require('discord.js');
const req = require("request");
exports.run = (client, message, args) => { 

 const emb = new Discord.RichEmbed();
	let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                let botid = member.user.id
            req('https://discordbots.org/api/users/' + botid, (e, r, b)=> {
						let contenu = JSON.parse(b)
					if(contenu.error === "Not found")  {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(client.user.tag, client.user.avatarURL)
						embed.setThumbnail(client.user.avatarURL)
						embed.setDescription("**Error**\n<a:dblspin:393548363879940108> Your Mention or object is not a user of discordbots.org")
						embed.setColor("#ffd954")
						message.channel.send({embed});
					} else {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(contenu.username, "https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".png")
						embed.setThumbnail("https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".png")
						embed.setColor("#ffd954")
						embed.setFooter("Powered by https://discordbots.org");
                                                embed.setColor(contenu.banner)
						embed.setTimestamp()
						embed.addField(contenu.username, contenu.shortdesc, true)
                                                 embed.addField("Bio", contenu.bio.length != 0 ? contenu.bio.join(", ") : "No bio.", true)
                                                  embed.addField("ID", contenu.id, true)
                                           embed.addField("Color", contenu.color.length != 0 ? contenu.color.join(", ") : "No Color.", true)
            	                           embed.addField("Artist ? ", contenu.artist === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
                                      embed.addField("Supporter ? ", contenu.supporter === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
                                       embed.addField("CertifiedDev ? ", contenu.certifiedDev === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
                                     embed.addField("Mod ? ", contenu.mod === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            	                         embed.addField("WebMod ? ", contenu.webMod === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
						embed.addField("Admin ? ", contenu.admin === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
						embed.addField("Socials", "[Github](" + contenu.github.length != 0 ? contenu.github.join(", ") : "No Github Account." + "), [Instagram](" + contenu.instagram.length != 0 ? contenu.instagram.join(", ") : "No Instagram Account." + "), [Reddit](" + contenu.reddit.length != 0 ? contenu.reddit.join(", ") : "No Reddit Account" + "), [Twitter](" + contenu.twitter.length != 0 ? contenu.twitter.join(", ") : "No Twitter Account" + "), [Youtube](" + contenu.youtube.length != 0 ? contenu.youtube.join(", ") : "No Youtube Account" + ")", true)
message.channel.send({embed});
    }
  })
}
