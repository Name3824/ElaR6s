const talkedRecently = new Set();
const Discord = require('discord.js')
var figlet = require('figlet');
exports.run = (client, message, args) => {
    if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
    
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
