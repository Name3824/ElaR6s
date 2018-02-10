const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: You are not in NSFW channel")

    const subreddits = [
        "NSFW_GIF",
        "nsfw_gifs",
        "porninfifteenseconds",
        "60FPSPorn",
        "porn_gifs",
        "nsfw_Best_Porn_Gif",
        "LipsThatGrip",
        "adultgifs"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0x68d696)
                    .setImage(url)
                message.channel.send({ embed });
        })
}
