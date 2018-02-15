const Discord = require('discord.js');
exports.run = (client, message, args) => { 

let sprite = message.content.split(' ').slice(2);
 const emb = new Discord.RichEmbed();
if(args[0] === "versions"){
  emb.setAuthor('Version Of Pokemons', 'https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807');
    emb.addField('sm', 'Sun And Moon');
    emb.addField('xy_gba', 'Pokemon Omega Ruby & Alpha Sapphire GBA');
    emb.addField('xy', 'X & Y');
    emb.addField('oras', 'Omega Ruby & Alpha Sapphire');
    emb.addField('bw', 'Black & White Animated');
    emb.addField('bw_no', ' Black & White');
    emb.addField('dp', 'Diamond, Pearl & Platinum');
    emb.addField('hg', 'HeartGold');
    emb.addField('ss', 'SoulSilver');
    emb.addField('rs', 'Ruby & Saphhire');
    emb.addField('em', 'Emerald Animated');
    emb.addField('frlg', 'FireRed & LeafGreen');
    emb.addField('gold', 'Gold');
    emb.addField('silver', 'Silver');
    emb.addField('crystal', 'Crystal Animated');
    emb.addField('rg', 'Red & Green(JP) Colored');
    emb.addField('rg_gray', 'Red & Green(JP)');
    emb.addField('rb', 'Red & Blue(EN) Colored');
    emb.addField('rb_gray', 'Red & Blue(EN)');
    emb.addField('yellow', 'Yellow Colored GBC');
    emb.addField('y_gb', 'Yellow Colored GB');
    emb.addField('y_gray', 'Yellow');
    emb.setFooter('e!s-pokemon [version] [pokemon]');
message.channel.send({embed:emb});
}else
if(args[0] === "sm"){
message.channel.send({file: `http://www.pkparaiso.com/imagenes/sol-luna/sprites/animados/${sprite}.gif`});
}else
if(args[0] === "xy_gba"){
message.channel.send({file: `http://www.pokestadium.com/sprites/xy-fan/${sprite}.png`});
}else
if(args[0] === "xy"){
message.channel.send({file: `http://www.pokestadium.com/sprites/xy/${sprite}.gif`});
}else
if(args[0] === "oras"){
message.channel.send({file: `http://www.pokestadium.com/sprites/xy/${sprite}.gif`});
}else
if(args[0] === "bw"){
message.channel.send({file: `http://www.pokestadium.com/sprites/black-white/animated/${sprite}.gif`});
}else
if(args[0] === "bw_no"){
message.channel.send({file: `http://www.pokestadium.com/sprites/black-white/${sprite}.png`});
}else
if(args[0] === "dp"){
message.channel.send({file: `http://www.pokestadium.com/sprites/diamond-pearl/${sprite}.png`});
}else
if(args[0] === "hg"){
message.channel.send({file: `http://www.pokestadium.com/sprites/heartgold-soulsilver/${sprite}.png`});
}else
if(args[0] === "ss"){
message.channel.send({file: `http://www.pokestadium.com/sprites/heartgold-soulsilver/frame2/${sprite}.png`});
}else
if(args[0] === "rs"){
message.channel.send({file: `http://www.pokestadium.com/sprites/emerald/${sprite}.png`});
}else
if(args[0] === "em"){
message.channel.send({file: `http://www.pokestadium.com/sprites/emerald/animated/${sprite}.gif`});
}else
if(args[0] === "frlg"){
message.channel.send({file: `http://www.pokestadium.com/sprites/firered-leafgreen/${sprite}.png`});
}else
if(args[0] === "gold"){
message.channel.send({file: `http://www.pokestadium.com/sprites/crystal/${sprite}.png`});
}else
if(args[0] === "silver"){
message.channel.send({file: `http://www.pokestadium.com/sprites/silver/${sprite}.png`});
}else
if(args[0] === "crystal"){
message.channel.send({file: `http://www.pokestadium.com/sprites/crystal/animated/${sprite}.gif`});
}else
if(args[0] === "rg"){
message.channel.send({file: `http://www.pokestadium.com/sprites/green/${sprite}.png`});
}else
if(args[0] === "rg_gray"){
message.channel.send({file: `http://www.pokestadium.com/sprites/green/gray/${sprite}.png`});
}else
if(args[0] === "rb"){
message.channel.send({file: `http://www.pokestadium.com/sprites/red-blue/${sprite}.png`});
}else
if(args[0] === "rb_gray"){
message.channel.send({file: `http://www.pokestadium.com/sprites/red-blue/gray/${sprite}.png`});
}else
if(args[0] === "yellow"){
message.channel.send({file: `http://www.pokestadium.com/sprites/yellow/gbc/${sprite}.png`});
}else
if(args[0] === "y_gb"){
message.channel.send({file: `http://www.pokestadium.com/sprites/yellow/${sprite}.png`});
}else
if(args[0] === "y_gray"){
message.channel.send({file: `http://www.pokestadium.com/sprites/yellow/gray/${sprite}.png`});
}else {
message.reply('Game not found, you can get a list of game codes by typing `>sprite games`!');
}

}
