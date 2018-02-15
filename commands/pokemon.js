
exports.run = (client, message, args) => {

var shiny = Math.floor(Math.random() * 16);
if(shiny == 10) {
shinyzer='xy-animated-shiny'
msg='Wow, you are lucky, you got a Shiny Pokemon.'
}else {
shinyzer='xy-animated'
msg='You got an awesome Pokemon.'
}
let party = Math.floor(Math.random() * 719);
message.channel.send(msg, { files: [`https://pldh.net/media/pokemon/gen6/${shinyzer}/${party}.gif`] });
}
