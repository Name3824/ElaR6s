    if (message.content === "b!lol") {
        var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.defaultChannel.send("▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
                                          **Atlas:milky_way:**
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
     ↳ Chi Siamo?      
       ↳ Siamo una nuova community emergente di persone in cerca di discussioni di qualunque tipo! 
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
 ↳ Cosa si può trovare nel vostro server?
       ↳ Chat universali, chat italiane, chat russe                 ecc...        
 ma non solo ci sono anche molte lobby come quella di pokemon o quella di anime ma non
     vanno scordate quelle musicali con            
        3 bot musicali e non solo! 
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
            ↳ Cosa aspetti?      
            Entra subito con questo link!         
              https://discord.gg/N9MQC4j 
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃"));
        } catch (err) {
            console.log("Could not send message to " + guild.name);
        }
    }
