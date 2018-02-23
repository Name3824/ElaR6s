const Discord = require('discord.js');
const moment = require('moment');
const req = require("request");
exports.run = (client, message, args) => {
		let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                let botid = member.user.id
            req('https://botsfordiscord.com/api/v1/bots/' + botid, (e, r, b)=> {
						let a = JSON.parse(b)
					if(a.error === "Not found")  {
						message.channel.send("Not a bot, or not listed (or not approved by mods)");
					} else {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(a.name, a.avatar)
            embed.setThumbnail(a.avatar)
						embed.setColor("#ffd954")
						embed.setFooter("Powered by https://botsfordiscord.com");
						embed.setTimestamp()
						embed.addField(a.uname, a.shortDesc, true)
						embed.addField("Verified ?", a.verified === true ? "Yes ✔️" : "No ❌", false)
						embed.addField("Approved ?", a.approved === true ? "Yes ✔️" : "No ❌", false)
            embed.addField("Server count", a.count, true)
						embed.addField("Prefix", a.prefix, true)
						embed.addField("Links", "[Invite](" + a.invite + "), [Avatar](" + a.avatar + ")", true)
message.channel.send({embed});
    }
  })
}
