const Discord = require('discord.js');  
exports.run = (client, message, args) => {
  const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
                const embed = new Discord.RichEmbed()
                    .setColor("#ff0000")
                    .addField('Error!', "You must be in a Voice channel to use this command!")

                message.channel.sendEmbed(embed)
                return
            }
            if (!args[1]) {
                const embed = new Discord.RichEmbed()
                    .setColor("#ff0000")
                    .addField('Error!', "No radio was selected!")

                message.channel.sendEmbed(embed)
                return
            }
            if (args[1] === "lego") {
                const embed = new Discord.RichEmbed()
                    .setColor("#68ca55")
                    .addField('Success!', "Now playing BlueAnimeIvana in " + message.member.voiceChannel)

                message.channel.send(embed);
                message.member.voiceChannel.join().then(connection => {
                    require('http').get("http://streaming.radionomy.com/BlueAnimeIvana?lang=en-US%2cen%3bq%3d0.9", (res) => {
                        connection.playStream(res);
                    })
                })
            }
}
