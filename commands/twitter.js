const getTwitterInfo = require('get-twitter-info')
const media = require('twitter-profile-media')
const Discord = require('discord.js')
const tokens = {
  consumer_key: "zXER6Vx9u3Nkm6gqyo4tz4o3N",
  consumer_secret: "eOmXy93azm0h5ps2MVGKdphY9LJnszD2XUv1LFmwM2NATfSoWF",
  access_token: "1012704864-5hsYucW4N1m5D3kBuzRqm5ezisPCwe80TD8VKvU",
  access_token_secret: "2ZM9rrx8bsTi7CllckFTFda9S5hGKaKunRkLe6IpQwM2C"
};
exports.run = (client, message, [profile]) => {
getTwitterInfo(tokens, profile).then(info => {
  media(tokens, profile).then(({ image, banner }) => {
    var embed = new Discord.RichEmbed()
      .setTitle(info.name)
      .setAuthor(info.screen_name)
      .setDescription(info.location)
      .setFooter(info.description)
      .setColor(info.profile_background_color)
      .setImage(image)
      .addField("Followers",info.followers_count,true)
      .addField("User Since",info.created_at,true)
      .addField("Verified?",info.verified,true)
      .addField("Latest Tweet",info.status.text,true)
    message.channel.send(embed)
  })
})
}
