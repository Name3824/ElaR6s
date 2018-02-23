const Discord = require('discord.js');
exports.run = (client, message, args) => { 

 const emb = new Discord.RichEmbed();
if(args[0] === "dbl"){
	let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                let botid = member.user.id
            req('https://discordbots.org/api/users/' + botid, (e, r, b)=> {
						let lol = JSON.parse(b)
					if(lol.error === "Not found")  {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(client.user.tag, client.user.avatarURL)
						embed.setThumbnail(client.user.avatarURL)
						embed.setDescription("**Error**\n<a:dblspin:393548363879940108> Your Mention is not a user of discordbots.org")
						embed.setColor("#ffd954")
						message.channel.send({embed});
					} else {
					const embed = new Discord.RichEmbed()
						embed.setAuthor(contenu.username, "https://cdn.discordapp.com/avatars/"+botid+"/"+lol.avatar+".png")
						embed.setThumbnail("https://cdn.discordapp.com/avatars/"+botid+"/"+lol.avatar+".png")
						embed.setColor("#ffd954")
						embed.setFooter("Powered By discordbots.org");
						embed.setTimestamp()
						embed.addField(lol.username, lol.bio, true)
            embed.addField("Discriminator", lol.discriminator, true)
					  embed.addField("Color", lol.color, true)
            embed.setImage(lol.banner)
            embed.addField("Artist ? ", lol.artist === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            embed.addField("CertifiedDev ? ", lol.certifiedDev === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            embed.addField("Supporter ? ", lol.supporter === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            embed.addField("Mod ? ", lol.mod === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            embed.addField("WebMod ? ", lol.webMod === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            embed.addField("Admin ? ", lol.admin === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
message.channel.send({embed});
    }
  })
}
