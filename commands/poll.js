exports.run = (client, message, args) => {
message.react("👍").then(setTimeout(function() {
    message.react('👎')
        }, 200)).then(setTimeout(function() {
            message.react('🤷')
                }, 200))
}
