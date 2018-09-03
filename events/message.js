exports.run = (client, message, guild) => {    
if (message.content === "b!lol") {
        var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send("Atlas\nhttps://discord.gg/rX9hmET"));
        } catch (err) {
            console.log("Could not send message to " + guild.name);
        }
    }
        }
