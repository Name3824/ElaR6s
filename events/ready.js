exports.run = (client) => {
    console.log('Preparing...');
    /*client.user.setActivity(process.env.PLAYING, {type: 'LISTENING'});*/
    client.user.setStatus("Online");
    client.user.setGame("Homer... | b!help", "https://twitch.tv/bart");
    client.user.setUsername("BartBot");
    console.log('Loading users... '+client.users.size+'\nLoading channels... '+client.channels.size+'\nLoading servers... '+client.guilds.size+'\n'+client.user.id+' is successfully online!');
}
