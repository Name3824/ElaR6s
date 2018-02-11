const Discord = require('discord.js')
var figlet = require('figlet');
exports.run = (client, message, args) => {
    
  const emb = new Discord.RichEmbed();
    emb.setAuthor('Error');
    emb.setDescription('You must enter a phrase.');
    emb.setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);

        let asciiwords = args.join(' ');
        if(!asciiwords) return message.channel.send(emb);
        figlet(asciiwords, function(err, data) {
            if (err) {
                client.log('Something went wrong...');
                console.dir(err);
                return;
            }
            message.channel.send(data, {code: 'xl'});
        });
}
