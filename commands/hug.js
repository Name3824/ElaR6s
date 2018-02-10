    exports.run = (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.get(args) || message.member
    let patlinks = ["http://media3.giphy.com/media/14aBJO7py75MD6/giphy.gif", "http://gifimage.net/wp-content/uploads/2017/07/anime-tackle-hug-gif-9.gif", "http://i.imgur.com/tuH4gqZ.gif", "https://68.media.tumblr.com/f5b4d602384bdaac19f8fcba5d12359d/tumblr_opo7uiZD8H1w169g0o1_500.gif", "https://pa1.narvii.com/6472/0bb16033352529eaa6eec73a63f347967e330c62_hq.gif"]
    let randompat = patlinks[Math.floor(Math.random() * patlinks.length)]
    if (!member) {
        message.reply("baka you need to mention someone to hug 💜")
    } else {
        message.channel.send({embed: {
            color: 0x7c17ef,
            title: `${message.author.username} just hug ${member.user.username}!💜`,
            image: {
                url: `${randompat}`
            }
        }})
    }
}
