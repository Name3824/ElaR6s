const Discord = require('discord.js');
const moment = require('moment');
const req = require("request");
exports.run = (client, message, args) => {
let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
let botid = member.user.id
					req({
					url:"https://ls.terminal.ink/api/v1/bots/" + botid,
					headers:{
					   "Authorization":process.env.TERMINAL
					}}, (e, r, b) =>{
						a = JSON.parse(b)
						if(a.error === "Bot user ID not found")  {
							message.channel.send("Not a bot, or not listed (or not approved by mods)");
						} else {
				const embed = new Discord.RichEmbed()
						embed.setAuthor(a.name, "a.avatar")
						embed.setThumbnail(a.avatar)
						embed.setColor("#ffd954")
						embed.setFooter("Powered by https://ls.terminal.ink");
						embed.setTimestamp()
						embed.addField(a.name, a.shortDesc, true)
		         embed.addField("Server count", a.count, true)
						embed.addField("Prefix", a.prefix, true)
            embed.addField("ID", a.id, true)
            embed.addField("Upvotes", a.upvotes, true)
            embed.addField("Downvotes", a.downvotes, true)
            embed.addField("Category", a.category, true)
						embed.addField("Approved ?", a.approved === true ? "Yes <:bfdyes:414604312296030208>" : "No <:bfdno:414604345770770432>", true)
            embed.addField("Links", "[Invite](" + a.invite + "), [Avatar](" + a.avatar + ")", true)
message.channel.send({embed});
						}
						})
				}
					}
				}
}
