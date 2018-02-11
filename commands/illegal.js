const Discord = require('discord.js')
const { get, post } = require('snekfetch');
exports.run = async (client, message, args) => {
let word = args.join('')
if(word.length > 10) return message.reply('Must be less than 10 characters')
if(word.length < 1) return message.reply('Must be more than 1 character.')     
for(i in word) {
  if(!isNaN(word[i])) {
    return message.reply('You cannot use numbers.')
  }
}
const emb = new Discord.MessageEmbed()
emb.setAuthor(`Trump has now made ${args[0]} illegal!`)
emb.setImage(`https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/${word.join('')}.gif`)
emb.setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86)
await post('https://is-now-illegal.firebaseio.com/queue/tasks.json').send({ task: 'gif', word: args[0]}).then(message.channel.send(`Waiting for Trump's approvement to make ${args[0]} illegal.`)).then(setTimeout(function() {
  message.channel.semb({embed:emb});
}, 10000))

};
