const Discord = require('discord.js');
exports.run = (client, message, args) => {
let botid = member.user.id
					req('https://discordbots.org/api/bots/' + botid, (e, r, b)=> {
						let contenu = JSON.parse(b)
					if(contenu.error === "Not found")  {
						message.channel.send("Not a bot, or not listed (or not approved by mods)");
					} else {
					const embed = new Discord.RichEmbed()
						embed.setTitle(contenu.username)
						embed.setAuthor(bot.user.username, bot.user.avatarURL)
						embed.setColor(0x00AE86)
						embed.setFooter(bot.user.username, bot.user.avatarURL);
						embed.setImage('https://i.imgur.com/lHU6JcZ.png')
						embed.setTimestamp()
						embed.addField(contenu.username, contenu.shortdesc)
						embed.addField("Certified ?", contenu.certifiedBot === true ? "Yes ✅" : "No ❎")
						embed.addField("Server count", contenu.server_count)
						embed.addField("Lib used", contenu.lib)
						embed.addField("Added on", contenu.date)
						embed.addField("Prefix", contenu.prefix)
						embed.addField("Links", "[Invitation](" + contenu.invite + ")\n[DBL.org](https://discordbots.org/bot/" + botid + " )\n[Github](" + contenu.github + ")\n[Website](" + contenu.website + ")")
						embed.addField("Upvotes", contenu.points)
message.channel.send({embed});
    }
  }
}
