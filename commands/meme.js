const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {

    const subreddits = [
        "Meme",
        "Memegif",
        "Meme_gifs",
        "BestMeme",
        "Uganda_meme",
        "Memess",
        "Memes",
        "MemeMeme"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0x75C0AC)
                    .setImage(url)
                message.channel.send({ embed });
        })
}
