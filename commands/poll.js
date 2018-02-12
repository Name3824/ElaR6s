exports.run = (client, message, args) => {
let 123 = args.join(' ');
 const mainmessage = await message.channel.send("", {embed: {
      color: message.guild.member(client.user.id).highestRole.color || 0x00AE86,
      author: {
                name: "🎉 Poll 🎉",
                icon_url: "https://i0.wp.com/sendtask.io/wp-content/uploads/2017/04/emoji-tada.png?ssl=1"
             },
                    description: 123
             }
           }
        )
            
            await mainmessage.react("👍");
            await mainmessage.react("👎");
            await mainmessage.react("🤷‍♂");
            await mainmessage.react("🤷‍♀");
}
