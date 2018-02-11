exports.run = (client, msg, args) => {
    const Discord = require('discord.js');
    const [usr, top, bottom] = args.join(' ').split(' | ');
    if (!usr && !top && !bottom) return msg.reply('Command cannot be ran like this, problem between keyboard and chair.');
    if (!usr) return msg.reply('Invalid, no user defined.');
    if (!top) return msg.reply('Invalid, top text missing.');
    if (!bottom) return msg.reply('Invalid, bottom text missing.');

    const user = msg.mentions.users.map(user => {
    const image = user.displayAvatarURL;
    const memeurl = `https://memegen.link/custom/${encodeURIComponent(top)}/${encodeURIComponent(bottom)}.jpg?alt=${encodeURIComponent(image)}&font=impact`;
    const meme = new Discord.MessageEmbed()
        .setImage(memeurl);

    msg.channel.send({
        embed: meme
    });
};
}
