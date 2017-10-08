exports.run = (client, msg, args) => {
    if(args[1] || args[2] || args[3] || args[4]) return msg.channel.send("That's not a valid IP. Try with a valid one, for example ``mc.hypixel.net``");
    msg.channel.startTyping();
    msg.channel.send({embed: {
        color: 0x426830,
        author: {
            name: "Server banner for "+args[0],
            icon_url: "https://use.gameapis.net/mc/query/icon/"+args[0]
        },
        image: {
            url: "https://use.gameapis.net/mc/query/banner/"+args[0]
        },
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag}`
        }
    }});
    msg.channel.stopTyping();
}