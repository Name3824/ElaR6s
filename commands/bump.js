const d = require('discord.js')
const talkedRecently = new Set();
exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
         const embed = new d.RichEmbed();
          embed.setColor("#ffd954")
            embed.setAuthor('Denied', "https://vignette.wikia.nocookie.net/f1wikia/images/7/7e/Red_x.png/revision/latest?cb=20120910155654")
            embed.setDescription("**Try again in 24h**\nBumped in **https://discord.gg/2PQg2t3**")
         message.react("⏲");
} else {
const embed = new d.RichEmbed();
        message.channel.send(`**Successfully Bumped __${message.guild.name}__** \nBumped in **https://discord.gg/2PQg2t3** :tada:`)
        let bumped = client.channels.get('416670351762784257')
        lonk = message.channel.createInvite()
        var resolvedProm = Promise.resolve(lonk);
        var thenProm = resolvedProm.then(function(value) {
            console.log("" + value);
embed.setColor("#ffd954")
embed.setAuthor('Bumped Server', "https://images-ext-2.discordapp.net/external/JsuunnrSDxU8do6YXhGyRqRjEWTN4L98Vpf7nd8KxZI/https/emojipedia-us.s3.amazonaws.com/thumbs/120/google/80/ok-hand-sign_1f44c.png")
embed.addField('Server Name', message.guild.name, true)
embed.addField('Server Invite', value, true)
embed.addField('Server ID', message.guild.id, true)
embed.addField('Server Owner', `__**${client.users.get(message.guild.ownerID).tag}**__`, true)
embed.addField('Member Count', message.guild.memberCount, true)
embed.setThumbnail(message.guild.iconURL)
embed.setFooter(`Bumped by ${message.author.tag}`)
bumped.send({embed})
  })
}
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 86400000‬);
}
