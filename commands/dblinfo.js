const Discord = require('discord.js');
const moment = require('moment');
const req = require("request");
exports.run = (client, message, args) => {
		let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                let botid = member.user.id
            req('https://discordbots.org/api/bots/' + botid, (e, r, b)=> {
						let contenu = JSON.parse(b)
					if(contenu.error === "Not found")  {
						message.channel.send("Not a bot, or not listed (or not approved by mods)");
					} else {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(contenu.username, "https://cdn.discordapp.com/avatars/"+botid+"/"+contenu.avatar+".jpg")
						embed.setColor("#ffd954")
						embed.setFooter("Thanks Jus De Patate#0190 for this command ^^");
						embed.setTimestamp()
						embed.addField(contenu.username, contenu.shortdesc, true)
						embed.addField("Certified ?", contenu.certifiedBot === true ? "Yes ✔️" : "No ❌", false)
						embed.addField("Server count", contenu.server_count, true)
						embed.addField("Library", contenu.lib, true)
						embed.addField("Added on", contenu.date, true)
						embed.addField("Prefix", contenu.prefix, true)
						embed.addField("Upvotes", contenu.points, true)
						embed.addField("Links", "[Invite](" + contenu.invite + "), [DBL.org](https://discordbots.org/bot/" + botid + " ), [Github](" + contenu.github + "), [Website](" + contenu.website + "), [Support Server](https://discordapp.com/invite/" + contenu.support + ")", true)
message.channel.send({embed});
    }
  })
}
