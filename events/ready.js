exports.run = (client) => {
    const snekfetch = require('snekfetch');
    const PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI(process.env.PASTEBIN);
    console.log('Preparing...');
    client.user.setGame(" | g?help");
    snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
    .set('Authorization', process.env.DISCORDBOTLIST)
    .send({ server_count: client.guilds.size })
    .then(console.log('https://discordbots.org server count was successfully updated.'))
    .catch(e => console.warn('https://discordbots.org server count wasnt successfully updated.\nPlease, contact a DBL administrator.'));
    pastebin.createPaste(client.guilds.map(g => g.name+" ("+g.id+")").join("\n"), "SERVER_LIST").then(function (data) {
        client.users.get(process.env.OWNER).send(data);
    }).fail(function (err) {
        console.log(err);
    });
    console.log('Loading users... '+client.users.size+'\nLoading channels... '+client.channels.size+'\nLoading servers... '+client.guilds.size+'\n'+client.user.id+' is successfully online!');
}