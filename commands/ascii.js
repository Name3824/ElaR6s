const talkedRecently = new Set();
const Discord = require('discord.js')
var figlet = require('figlet');
exports.run = (client, message, args) => {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
    } else {
         
  const emb = new Discord.RichEmbed();
    emb.setAuthor('Error');
    emb.setDescription('You must enter a phrase.');
    emb.setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);

        let asciiwords = args.join(' ');
        if(!asciiwords) return message.channel.send({embed:emb});
        figlet(asciiwords, function(err, data) {
            if (err) {
                client.log('Something went wrong...');
                console.dir(err);
                return;
            }
            message.channel.send(data, {code: 'xl'});
        });
}
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
