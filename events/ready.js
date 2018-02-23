const Discord = require('discord.js');
const DBL = require("dblapi.js");
exports.run = (client) => {
    console.log('Preparing...');
    client.user.setActivity(process.env.PLAYING, {type: 'STREAMING'});
    client.user.setUsername("BartBot");
    console.log('Loading users... '+client.users.size+'\nLoading channels... '+client.channels.size+'\nLoading servers... '+client.guilds.size+'\n'+client.user.id+' is successfully online!');
   client.dbl = new DBL(process.env.DISCORDBOTLIST, client);
   client.dbl.postStats(client.guilds.size)
    .then(() => console.log('Updated discordbots.org stats.'));
    
    	snekfetch.post(`https://botsfordiscord.com/api/v1/bots/411860199473938433`)
  .set('Authorization', process.env.BTD)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
.catch(err => console.error(`Whoops something went wrong: ${err.body}`));
}
