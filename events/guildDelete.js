exports.run = (client, guild) => {
    const snekfetch = require('snekfetch');
    client.users.get(process.env.OWNER).send("I've left a guild!\n\n**Guild name:** `"+guild.name+"`\n**Guild ID:** `"+guild.id+"`\n**Guild Members:** `"+guild.memberCount+"`\n**Guild Owner:** `"+guild.owner.user.tag+" ("+guild.owner.user.id+")`\n**Total Nº of Guilds:** `"+client.guilds.size+"`");
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', process.env.DISCORDBOTLIST)
    .send({ server_count: client.guilds.size })
    .then(console.log('https://discordbots.org server count was successfully updated.'))
    .catch(e => console.warn('https://discordbots.org server count wasnt successfully updated.\nPlease, contact a DBL administrator.'));
}