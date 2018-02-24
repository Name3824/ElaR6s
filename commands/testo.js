const Discord = require('discord.js');
const moment = require('moment');
const req = require("request");
exports.run = (client, message, args) => {
	let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                        let botid = member.user.id
					req({
					url:"https://bots.discord.pw/api/bots/" + botid,
					headers:{
					   "Authorization":process.env.BLPW
					}}, (e, r, b) =>{
						contenu = JSON.parse(b)
						if(contenu.error === "Bot user ID not found")  {
							message.channel.send("Not a bot, or not listed (or not approved by mods)");
						} else {
						const embed = new Discord.RichEmbed()
							embed.setTitle(contenu.name)
							embed.setAuthor(bot.user.username, bot.user.avatarURL)
							embed.setColor(0x00AE86)
							embed.setFooter(bot.user.username, bot.user.avatarURL);
							embed.setImage('https://i.imgur.com/lHU6JcZ.png')
							embed.setTimestamp()
							embed.addField(contenu.name, contenu.description)
							embed.addField("Lib used", contenu.library)
							embed.addField("Prefix", contenu.prefix)
							embed.addField("Links", "[Invitation](" + contenu.invite_url +")\n[bd.pw](https://bots.discord.pw/bots/" + botid + ")\n[Website](" + contenu.website + ")")
							message.channel.send({embed});
						}
						})
}
