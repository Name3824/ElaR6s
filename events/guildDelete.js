exports.run = (client, guild) => {
    const snekfetch = require('snekfetch');
    const Discord = require('discord.js');
    const emb = new Discord.RichEmbed();
    const dbl = [];
    const bls = [];
    const dbpw = [];
    function emoji(emo) {
        delete require.cache[require.resolve(`../resources/emoji.js`)];
        let emojia = require("../resources/emoji.js");
        if (emojia[emo] === undefined) return "🅱";
        return emojia[emo];
    }
    //
    //
    //
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', process.env.DISCORDBOTLIST)
    .send({ server_count: client.guilds.size })
    .then(dbl.push(['Discord Bot List '+emoji('tickYes')]))
    .catch(e => dbl.push(['Discord Bot List '+emoji('tickNo')+'\n'+e]));
    snekfetch.post(`https://botlist.space/api/bots/${client.user.id}`)
    .set('Authorization', process.env.BOTLISTSPACE)
    .send({ server_count: client.guilds.size })
    .then(bls.push(['Bot List Space '+emoji('tickYes')]))
    .catch(e => bls.push(['Bot List Space '+emoji('tickNo')+'\n'+e]));
    snekfetch.post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
    .set('Authorization', process.env.DISCORDBOTS)
    .send({ server_count: client.guilds.size })
    .then(dbpw.push(['Discord Bots '+emoji('tickYes')]))
    .catch(e => dbpw.push(['Discord Bots '+emoji('tickNo')+'\n'+e]));
    //
    //
    //
    emb.setColor('#2040ff');
    emb.setAuthor("I've left a guild!", 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/114/warning-sign_26a0.png');
    emb.addField('Guild Name', '**'+guild.name+'**');
    emb.addField('Guild ID', '**'+guild.id+'**');
    emb.addField('Guild Members', '**'+guild.memberCount+'**');
    emb.addField('Guild Owner', '**'+guild.owner.user.tag+' ('+guild.owner.user.id+')**');
    emb.addField('Server Count', '**'+dbl[0]+'\n'+bls[0]+'\n'+dbpw[0]+'**');
    emb.setFooter(client.guilds.size+' guilds and counting', client.user.avatarURL);
    client.users.get(process.env.OWNER).send({embed:emb});
}