const Discord = require('discord.js')
var figlet = require('figlet');
exports.run = async (client, message, args) => { 
    
    const errorEmbed = new Discord.MessageEmbed()
    .setAuthor('Error')
    .setDescription('You must enter a phrase.')
    .setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);

        let asciiwords = args.join(' ');
        if(!asciiwords) return message.channel.send(errorEmbed);
        figlet(asciiwords, function(err, data) {
            if (err) {
                client.log('Something went wrong...');
                console.dir(err);
                return;
            }
            message.channel.send(data, {code: 'xl'});
        });
}
