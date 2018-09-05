
const Discord = require('discord.js')
exports.run = async (client, msg, args) => {
if (msg.author.id !== '324136800756957184') {
      return;
    }

    const sortedGuilds = Array.from(msg.client.guilds.values()).sort((a, b) => b.memberCount - a.memberCount);

    for (let i = 0; i < sortedGuilds.length; i++) {
      await PromiseUtil.delay(2500);

      const announcementsChannel = sortedGuilds[i].announcementsChannel;

      if (announcementsChannel !== undefined) {
        announcementsChannel.send(args.message)
          .catch(async (err) => {
            if (err instanceof discord.DiscordApiError === true && err.code === 429) {
              await PromiseUtil.delay(60000);
            }
          });
      }
    }
  }
}
