exports.run = (client, guild) => {
    client.users.get(process.env.OWNER).send("I've left a guild!\n\n**Guild name:** `"+guild.name+"`\n**Guild ID:** `"+guild.id+"`\n**Guild Members:** `"+guild.memberCount+"`\n**Guild Owner:** `"+guild.owner.user.tag+" ("+guild.owner.user.id+")`\n**Total Nº of Guilds:** `"+client.guilds.size+"`");
}