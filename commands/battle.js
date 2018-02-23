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
                emb.setThumbnail('https://cdn1.iconfinder.com/data/icons/unigrid-military/61/002_military_defense_defend_swords_shield-512.png');
                emb.addField('__User__', `${message.author.username}`, inline = true);
                emb.addField('__Opponent__', `${battler.username}`, inline = true);
                emb.addField("__User's HP__", `${b1health}HP`, inline = true);
                emb.addField("__Opponent's HP__", `${b2health}HP`, inline = true);
                emb.setFooter(`That was a great fight! ${winner} win🏆`);
                emb.setColor("#ffd954");
            message.channel.send({embed:emb});
        }

        if (b2health > b1health) {
            let winner = battler.username
            const embed = new Discord.MessageEmbed();
                emb.setAuthor(`Battle Arena`);
                emb.setThumbnail('https://cdn1.iconfinder.com/data/icons/unigrid-military/61/002_military_defense_defend_swords_shield-512.png');
                emb.addField('__User__', `${message.author.username}`, inline = true);
                emb.addField('__Opponent__', `${battler.username}`, inline = true);
                emb.addField("__User's HP__", `${b1health}HP`, inline = true);
                emb.addField("__Opponent's HP__", `${b2health}HP`, inline = true);
                emb.setFooter(`That was a great fight! ${winner} win🏆`);
                emb.setColor("#ffd954");
            message.channel.send({embed:emb});
        }

        if (b2health === b1health) {
            let winner = 'draw'
            const embed = new Discord.MessageEmbed();
                emb.setAuthor(`Battle Arena`);
                emb.setThumbnail('https://cdn1.iconfinder.com/data/icons/unigrid-military/61/002_military_defense_defend_swords_shield-512.png');
                emb.addField('__User__', `${message.author.username}`, inline = true);
                emb.addField('__Opponent__', `${battler.username}`, inline = true);
                emb.addField("__User's HP__", `${b1health}HP`, inline = true);
                emb.addField("__Opponent's HP__", `${b2health}HP`, inline = true);
                emb.setFooter(`That was a great fight! But it was a draw...`);
                emb.setColor("#ffd954");
            message.channel.send({embed:emb});
        }
}
