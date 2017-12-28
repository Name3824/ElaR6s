exports.run = (client) => {
    console.log('Preparing...');
    client.user.setGame(" vgh.ftp.sh | "+process.env.PREFIX+"help");
    console.log('Loading users... '+client.users.size+'\nLoading channels... '+client.channels.size+'\nLoading servers... '+client.guilds.size+'\n'+client.user.id+' is successfully online!');
}
