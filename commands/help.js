exports.run = (client, msg, args) => {
    msg.channel.startTyping();
    msg.channel.send({embed: {
        color: 0x75C0AC,
        author: {
            name: "About "+client.user.tag,
            icon_url: client.user.avatarURL
        },
        fields: [
            {
                name: "Howdy!",
                value: "I'm Gaming Bot, and as the name says, i'm a damn Gaming Bot!\nI'm built with [node.js](https://nodejs.org), [discord.js](https://discord.js.org) and with "+client.users.get("216901800899510272").tag+"'s love aswell!"
            },{
                name: "Some of my commands:",
                value: "**"+process.env.PREFIX+"osu** ➤ Shows stats in osu! \n**"+process.env.PREFIX+"minecraft** ➤ Shows stats in Minecraft"
            }
        ],
        footer: {
            icon_url: msg.author.avatarURL,
            text: `${msg.author.tag}`
        }
    }});
    msg.channel.stopTyping();
}