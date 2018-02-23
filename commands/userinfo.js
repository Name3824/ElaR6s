const Discord = require('discord.js');
const req = require("request");
exports.run = (client, message, args) => { 

if(args[0] === "dbl"){
	let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
                let botid = member.user.id
            req('https://discordbots.org/api/users/' + botid, (e, r, b)=> {
						let lol = JSON.parse(b)
					if(lol.error === "Not found")  {
					const emb = new Discord.RichEmbed()
						emb.setAuthor(client.user.tag, client.user.avatarURL)
						emb.setThumbnail(client.user.avatarURL)
						emb.setDescription("**Error**\n<a:dblspin:393548363879940108> Your Mention is not a user of discordbots.org")
						emb.setColor("#ffd954")
						message.channel.send({embed:emb});
					} else {
					const emb = new Discord.RichEmbed()
						emb.setAuthor(lol.username, "https://cdn.discordapp.com/avatars/"+botid+"/"+lol.avatar+".png")
						emb.setThumbnail("https://cdn.discordapp.com/avatars/"+botid+"/"+lol.avatar+".png")
						emb.setColor("#ffd954")
						emb.setFooter("Powered By discordbots.org");
						emb.setTimestamp()
						emb.addField(lol.username, lol.bio, true)
            emb.addField("Discriminator", lol.discriminator, true)
					  emb.addField("Color", lol.color, true)
            emb.setImage(lol.banner)
            emb.addField("Artist ? ", lol.artist === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            emb.addField("CertifiedDev ? ", lol.certifiedDev === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            emb.addField("Supporter ? ", lol.supporter === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            emb.addField("Mod ? ", lol.mod === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            emb.addField("WebMod ? ", lol.webMod === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
            emb.addField("Admin ? ", lol.admin === true ? "Yes <:tickYes:315009125694177281>" : "No <:tickNo:315009174163685377>", true)
message.channel.send({embed:emb});
    }
  })
 }
}
