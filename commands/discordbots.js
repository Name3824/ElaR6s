const Discord = require('discord.js');
const moment = require('moment');
const req = require("request");
exports.run = (client, message, args) => {
		let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                let botid = member.user.id || client.user.find('name', message.replace('discordbots', '')).id
            req('https://discordbots.org/api/bots/' + botid, (e, r, b)=> {
						let contenu = JSON.parse(b)
					if(contenu.error === "Not found")  {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(client.user.tag, client.user.avatarURL)
						embed.setThumbnail(client.user.avatarURL)
						embed.setDescription("**Error**\n<a:dblspin:393548363879940108> Your Mention or object is not a bot of discordbots.org")
						embed.setColor("#ffd954")
						message.channel.send({embed});
					} else {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(contenu.username, "https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".png")
						embed.setThumbnail("https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".png")
						embed.setColor("#ffd954")
						embed.setFooter("Thanks Jus De Patate#0190 for this command ^^");
						embed.setTimestamp()
						embed.addField(contenu.username, contenu.shortdesc, true)
						embed.addField("Certified ? <:dblCertified:392249976639455232>", contenu.certifiedBot === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
						embed.addField("Server count", contenu.server_count, true)
						embed.addField("Library", contenu.lib, true)
						embed.addField("Added on", contenu.date, true)
						embed.addField("Prefix", contenu.prefix, true)
						embed.addField("Upvotes", contenu.points, true)
						embed.addField("Owner(s)", "<@"+contenu.owners.join(">, <@")+">", true)
						embed.addField("Tag(s)", contenu.tags.length != 0 ? contenu.tags.join(", ") : "No tags", true)
						embed.addField("Links", "[Invite](" + contenu.invite + "), [DBL.org](https://discordbots.org/bot/" + botid + " ), [Github](" + contenu.github + "), [Website](" + contenu.website + "), [Support Server](https://discordapp.com/invite/" + contenu.support + ")", true)
message.channel.send({embed});
    }
  })
}
