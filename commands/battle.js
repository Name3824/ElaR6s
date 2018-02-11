const Discord = require('discord.js')
var figlet = require('figlet');
exports.run = async (client, message, args) => { 
        let battler = message.mentions.users.first();
        if (!battler) {
            return message.reply('Please mention someone to battle')
        }
        let b1health = Math.floor((Math.random() * 100));
        let b2health = Math.floor((Math.random() * 100));
        if (b1health > b2health) {
            let winner = message.author.username
            const emb = new Discord.RichEmbed();
                emb.setAuthor(`Battle Arena`);
                emb.setThumbnail('http://i54.tinypic.com/2e0pcsi.png');
                emb.addField('__User__', `${message.author.username}`, inline = true);
                emb.addField('__Opponent__', `${battler.username}`, inline = true);
                emb.addField("__User's HP__", `${b1health}HP`, inline = true);
                emb.addField("__Opponent's HP__", `${b2health}HP`, inline = true);
                emb.setFooter(`That was a great fight! ${winner} came on top though`);
                emb.setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);
            message.channel.send({embed:emb});
        }

        if (b2health > b1health) {
            let winner = battler.username
            const embed = new Discord.MessageEmbed();
                emb.setAuthor(`Battle Arena`);
                emb.setThumbnail('http://i54.tinypic.com/2e0pcsi.png');
                emb.addField('__User__', `${message.author.username}`, inline = true);
                emb.addField('__Opponent__', `${battler.username}`, inline = true);
                emb.addField("__User's HP__", `${b1health}HP`, inline = true);
                emb.addField("__Opponent's HP__", `${b2health}HP`, inline = true);
                emb.setFooter(`That was a great fight! ${winner} came on top though`);
                emb.setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);
            message.channel.send({embed:emb});
        }

        if (b2health === b1health) {
            let winner = 'draw'
            const embed = new Discord.MessageEmbed();
                emb.setAuthor(`Battle Arena`);
                emb.setThumbnail('http://i54.tinypic.com/2e0pcsi.png');
                emb.addField('__User__', `${message.author.username}`, inline = true);
                emb.addField('__Opponent__', `${battler.username}`, inline = true);
                emb.addField("__User's HP__", `${b1health}HP`, inline = true);
                emb.addField("__Opponent's HP__", `${b2health}HP`, inline = true);
                emb.setFooter(`That was a great fight! But it was a draw...`);
                emb.setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86);
            message.channel.send({embed:emb});
        }
}