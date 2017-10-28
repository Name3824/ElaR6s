exports.run = (client) => {
    const PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI(process.env.PASTEBIN);
    console.log('Preparing...');
    client.user.setGame(" g-bot.tk | g?help");
    pastebin.createPaste(client.guilds.map(g => g.name+" ("+g.id+")").join("\n"), "SERVER_LIST").then(function (data) {
        client.users.get(process.env.OWNER).send(data);
    }).fail(function (err) {
        console.log(err);
    });
    console.log('Loading users... '+client.users.size+'\nLoading channels... '+client.channels.size+'\nLoading servers... '+client.guilds.size+'\n'+client.user.id+' is successfully online!');
}