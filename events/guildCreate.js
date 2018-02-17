const snekfetch = require('snekfetch');
const Discord = require('discord.js');
const push = require('pushbullet-api');
const pb = new push(process.env.PUSH);
const emb = new Discord.RichEmbed();

exports.run = (client, guild) => {
    //
    //
    //
    pb.pushNote('Guild (+)', 'Guild Name: '+guild.name+'\nGuild Count: '+client.guilds.size).then(res => {
        console.log('Sent');
    });
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
}
