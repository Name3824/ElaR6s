exports.run = (client, msg, args) => {
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
          return this.toString().replace(/^\s+|\s+$/g, '');
        };
    }
    const query = args.join(" ");
    const ping = require('mc-hermes');
    const Discord = require('discord.js');
    if(query.startsWith("-server")) {
        ip = query.replace('-server', '').trim();
        if(!ip) return msg.channel.send("That's not a valid server. Try with a valid one, for example `mc.hypixel.net`");
        var url = 'https://mcapi.de/api/image/favicon/'+ip
        ping.pc({ server: ip }).then((data) => {
            msg.channel.startTyping();
            msg.channel.send({embed: {
                color: 0x44FC37,
                author: {
                    name: "Information about "+ip,
                    icon_url: url
                },
                fields: [
                    {
                        name: "Version:",
                        value: data.version.name
                    },{
                        name: "Protocol:",
                        value: data.version.protocol
                    },{
                        name: "Players:",
                        value: data.players.online+" out of "+data.players.max
                    }
                ],
                thumbnail: {
                    url: url
                },
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: `${msg.author.tag}`
                }
            }});
            msg.channel.stopTyping();
        })
        .catch(console.error);
    } else if(query.startsWith("-user")) {
        user = query.replace('-user', '').trim();
        if(!user) return msg.channel.send("That's not a valid user. Try with a valid one, for example `Notch`");
        msg.channel.startTyping();
        msg.channel.send({embed: {
            color: 0x44FC37,
            author: {
                name: user+"'s Skin",
                icon_url: "http://minecraft-skin-viewer.net/3d.php?layers=true&aa=true&a=0&w=0&wt=0&abg=0&abd=0&ajg=0&ajd=0&ratio=13&format=png&login="+user+"&headOnly=true&displayHairs=true&randomness=384"
            },
            image: {
                url: "http://minecraft-skin-viewer.net/3d.php?layers=true&aa=true&a=0&w=0&wt=0&abg=0&abd=0&ajg=0&ajd=0&ratio=13&format=png&login="+user+"&headOnly=false&displayHairs=true&randomness=384"
            },
            footer: {
                icon_url: msg.author.avatarURL,
                text: `${msg.author.tag}`
            }
        }});
        msg.channel.stopTyping();
    } else if(!args[0]) {
        msg.channel.startTyping();
        msg.channel.send({embed: {
            color: 0x44FC37,
            author: {
                name: "Minecraft Commands",
                icon_url: "https://media.discordapp.net/attachments/264445053596991498/366656518524895232/unknown.png"
            },
            thumbnail: {
                url: "https://media.discordapp.net/attachments/264445053596991498/366656518524895232/unknown.png"
            },
            fields: [
                {
                    name: "`-user`",
                    value: "Search for a user's skin\nUsage: `"+process.env.PREFIX+"minecraft -user Notch`"
                },{
                    name: "`-server`",
                    value: "Search for a server's status\nUsage: `"+process.env.PREFIX+"minecraft -server mc.hypixel.net`"
                }
            ],
            footer: {
                icon_url: msg.author.avatarURL,
                text: `${msg.author.tag}`
            },
        }});
        msg.channel.stopTyping();
    }
}