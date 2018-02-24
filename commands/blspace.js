const Discord = require('discord.js');
const moment = require('moment');
const req = require("request");
exports.run = (client, message, args) => {
		let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                let botid = member.user.id
            req('https://botlist.space/api/bots/' + botid, (e, r, b)=> {
						let a = JSON.parse(b)
					if(a.error.message === "That bot does not exist.")  {
						const embed = new Discord.RichEmbed()
						embed.setAuthor(client.user.tag, client.user.avatarURL)
						embed.setThumbnail(client.user.avatarURL)
						embed.setDescription("**Error**\n<:oof:402924395779194880> Your Mention or object is not a bot of botlist.space")
                                                embed.setColor("#ffd954")
						message.channel.send({embed});
					} else {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(a.name)
						embed.setColor("#ffd954")
						embed.setFooter("Powered by https://botlist.space");
						embed.setTimestamp()
						embed.addField(a.name, a.shortDesc, true)
		         embed.addField("Server count", a.count, true)
						embed.addField("Prefix", a.prefix, true)
            embed.addField("ID", a.id, true)
            embed.addField("Views", a.views, true)
            embed.addField("Library", a.library, true)
            embed.addField("Premium ?", a.premium === true ? "Yes <:bfdverified:414604185951272963>" : "No <:bfdno:414604345770770432>", true)
						embed.addField("Approved ?", a.approved === true ? "Yes <:bfdyes:414604312296030208>" : "No <:bfdno:414604345770770432>", true)
            embed.addField("Featured ?", a.featured === true ? "Yes <:bfdverified:414604185951272963>" : "No <:bfdno:414604345770770432>", true)
            embed.addField("Links", "[Invite](" + a.invite + ")", true)
message.channel.send({embed});
    }
  })
}
