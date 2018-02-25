const Discord = require('discord.js');
const moment = require('moment');
const req = require("request");
exports.run = (bot, message, args) => {
	let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                        let botid = member.user.id
					req({
					url:"https://ls.terminal.ink/api/v1/" + botid,
					headers:{
					   "Authorization":process.env.TERMINAL
					}}, (e, r, b) =>{
						contenu = JSON.parse(b)
						if(contenu.error === "This API method has not been defined.")  {
											const embed = new Discord.RichEmbed()
					            	embed.setAuthor(client.user.tag, client.user.avatarURL)
						           embed.setThumbnail(client.user.avatarURL)
						           embed.setDescription("**Error**\n<:angryeyes:385118260242153472> Your Mention or object is not a bot of ls.terminal.ink")
                       embed.setColor("#ffd954")
                       message.channel.send({embed});
						} else {
						const embed = new Discord.RichEmbed()
							embed.setTitle(contenu.name)
							embed.setAuthor(contenu.name, contenu.avatar)
							embed.setColor(0x00AE86)
							embed.setFooter("Powered by https://ls.terminal.link");
							embed.setThumbnail(contenu.avatar)
							embed.setTimestamp()
							embed.addField(contenu.name, contenu.shortDesc)
							embed.addField("Prefix", contenu.prefix)
              embed.addField("Server Count", contenu.count)
              embed.addField("ID", contenu.id)
              embed.addField("Category", contenu.category)
              embed.addField("Downvotes", contenu.downvotes)
              embed.addField("Votes", contenu.votes)
              embed.addField("Rating", contenu.rating)
							embed.addField("Approved ?", a.approved === true ? "Yes <:bfdyes:414604312296030208>" : "No <:bfdno:414604345770770432>", false)
							embed.addField("Links", "[Invite](" + contenu.invite +"),[Terminal](https://ls.terminal.ink/bot/" + botid + ")")
							message.channel.send({embed});
						}
						})
}
