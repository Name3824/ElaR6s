const Discord = require('discord.js');
const moment = require('moment');
const req = require("request");
exports.run = (client, message, args) => {
		let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                let botid = member.user.id
            req('https://botsfordiscord.com/api/v1/bots/' + botid, (e, r, b)=> {
						let a = JSON.parse(b)
					if(a.error === "Not found")  {
						const embed = new Discord.RichEmbed()
						embed.setAuthor(client.user.tag, client.user.avatarURL)
						embed.setThumbnail(client.user.avatarURL)
						embed.setDescription("**Error**\n<a:bfdslide:415024565438251008> Your Mention or object is not a bot of botsfordiscord.com")
                                                embed.setColor("#ffd954")
						message.channel.send("Not a bot, or not listed (or not approved by mods)");
					} else {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(a.name, a.avatar)
            embed.setThumbnail(a.avatar)
						embed.setColor("#ffd954")
						embed.setFooter("Powered by https://botsfordiscord.com");
						embed.setTimestamp()
						embed.addField(a.name, a.shortDesc, true)
						embed.addField("Verified ?", a.verified === true ? "Yes <:bfdverified:414604185951272963>" : "No <:bfdno:414604345770770432>", false)
						embed.addField("Approved ?", a.approved === true ? "Yes <:bfdyes:414604312296030208>" : "No <:bfdno:414604345770770432>", false)
            embed.addField("Server count", a.count, true)
						embed.addField("Prefix", a.prefix, true)
						embed.addField("Links", "[Invite](" + a.invite + "), [Avatar](" + a.avatar + ")", true)
message.channel.send({embed});
    }
  })
}
