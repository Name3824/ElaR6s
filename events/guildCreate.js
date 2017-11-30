exports.run = (client, guild) => {
    const snekfetch = require('snekfetch');
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    //
    //
    //
    emb.setColor('#2040ff');
    emb.setThumbnail(guild.iconURL);
    emb.setAuthor("I've joined a guild!", 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/warning-sign_26a0.png');
    emb.addField('Guild Name', '**'+guild.name+'**');
    emb.addField('Guild ID', '**'+guild.id+'**');
    emb.addField('Guild Members', '**'+guild.memberCount+'**');
    emb.addField('Guild Owner', '**'+guild.owner.user.tag+' ('+guild.owner.user.id+')**');
    //
    //
    //
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', process.env.DISCORDBOTLIST)
    .send({ server_count: client.guilds.size })
    .then(emb.addField('Discord Bot List', '<:tickYes:315009125694177281>'))
    .catch(e => emb.addField('Discord Bot List', '<:tickNo:315009174163685377>\n'+e));
    snekfetch.post(`https://botlist.space/api/bots/${client.user.id}`)
    .set('Authorization', process.env.BOTLISTSPACE)
    .send({ server_count: client.guilds.size })
    .then(emb.addField('Bot List Space', '<:tickYes:315009125694177281>'))
    .catch(e => emb.addField('Bot List Space', '<:tickNo:315009174163685377>\n'+e));
    snekfetch.post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
    .set('Authorization', process.env.DISCORDBOTS)
    .send({ server_count: client.guilds.size })
    .then(emb.addField('Discord Bots', '<:tickYes:315009125694177281>'))
    .catch(e => emb.addField('Discord Bots', '<:tickNo:315009174163685377>\n'+e));
    //
    //
    //
    emb.setFooter(client.guilds.size+' guilds and counting', client.user.avatarURL);
    client.users.get(process.env.OWNER).send({embed:emb});
}