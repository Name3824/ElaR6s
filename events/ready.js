const snekfetch = require('snekfetch');
const Discord = require('discord.js');

exports.run = (client) => {
    
    	snekfetch.post(`https://discordbots.org/api/bots/stats`)
  .set('Authorization', process.env.DBLORG)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
.catch(err => console.error(`Whoops something went wrong: ${err.body}`));
    
    console.log('Preparing...');
    client.user.setActivity(process.env.PLAYING, {type: 'STREAMING'});
    client.user.setUsername("BartBot");
    console.log('Loading users... '+client.users.size+'\nLoading channels... '+client.channels.size+'\nLoading servers... '+client.guilds.size+'\n'+client.user.id+' is successfully online!');
}
