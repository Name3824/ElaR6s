const snekfetch = require("snekfetch");
const Discord = require("discord.js")
const { URLSearchParams } = require("url");

exports.run = async (client, message, args) => {
    const meme = args.join(" ");
    //if (meme.length < 5) return message.response(undefined, `Invalid Command usage: \`${exports.help.usage}\``);
    const msg = await message.channel.send(`**${message.member.displayName}** isn't sure...`);
    let topFry;
    let bottomFry;

    if (meme.includes("; ")) {
      [topFry, bottomFry] = meme.split("; ");
    } else {
      topFry = meme;
      bottomFry = "";
    }

    const params = new URLSearchParams();
    params.append("template_id", 61520);
    params.append("username", 'youssef04');
    params.append("password", 'doylebot');
    params.append("text0", topFry);
    params.append("text1", bottomFry);

    const { body } = await snekfetch.post(`https://api.imgflip.com/caption_image?${params}`);
    const embed = new Discord.RichEmbed()
      .setColor(message.guild.member(client.user.id).highestRole.color || 0x00AE86)
      .setImage(body.data.url)
      .setFooter(`Powered by imgflip.com, requested by ${message.member.displayName}`, msg.author.avatarURL())
      .setTimestamp();
      message.channel.send({embed})
    await msg.delete();
}
