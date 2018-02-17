exports.run = (client) => {
    console.log('Preparing...');
    client.user.setActivity(process.env.PLAYING, {type: 'STREAMING'});
    client.user.setUsername("BartBot");
    console.log('Loading users... '+client.users.size+'\nLoading channels... '+client.channels.size+'\nLoading servers... '+client.guilds.size+'\n'+client.user.id+' is successfully online!');
}
