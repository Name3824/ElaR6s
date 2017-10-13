exports.run = (client, msg, args) => {
    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
      if(msg.author.id !== "216901800899510272") return;
          try {
            const code = args.join(" ");
            let evaled = eval(code);
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            msg.channel.send({embed:{
                color: 0x41B589,
                title: "Eval | Success",
                fields: [
                    {
                        name: "Input",
                        value: "```"+args.join(" ")+"```"
                    },{
                        name: "Output",
                        value: "```"+clean(evaled)+"```"
                    }
                ],
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: `${msg.author.tag}`
                }
            }});
          } catch (err) {
            const code = args.join(" ");
            msg.channel.send({embed: {
                color: 0xA22665,
                title: "Eval | Error",
                fields: [
                    {
                        name: "Input",
                        value: "```"+args.join(" ")+"```"
                    },{
                        name: "Output",
                        value: "```"+clean(err)+"```"
                    }
                ],
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: `${msg.author.tag}`
                }
            }})
          }
}