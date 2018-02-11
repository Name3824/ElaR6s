const snekfetch = require("snekfetch");
const { URLSearchParams } = require("url");
const Discord = require("discord.js")

exports.run = (client, message, args) => {
    const meme = args.join(" ");
    const msg = await message.channel.send(`**${message.member.displayName}** slaps you...`);
    let topScroll;
    let bottomScroll;
    if (meme.includes("; ")) {
      [topScroll, bottomScroll] = meme.split("; ");
    } else {
      topScroll = meme;
      bottomScroll = "";
    }
    const params = new URLSearchParams();
    params.append("template_id", 438680);
    params.append("username", 'youssef04');
    params.append("password", 'doylebot');
    params.append("text0", topScroll);
    params.append("text1", bottomScroll);

    const { body } = await snekfetch.post(`https://api.imgflip.com/caption_image?${params}`);
    const emb = new Discord.MessageEmbed()
      emb.setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86)
      emb.setImage(body.data.url)
      emb.setFooter(`Powered by imgflip.com, requested by ${message.member.displayName}`, message.author.displayAvatarURL())
      .embsetTimestamp()
      message.channel.send({embed:emb});
    await msg.delete();
}
