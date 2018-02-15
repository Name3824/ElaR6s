exports.run = (client, message, args) => { 

let sprite = message.content.split(' ').slice(2);

if(args[0] === "games"){
message.channel.send('**sm** = Sun & Moon\n\n**xy** = X & Y\n**oras** = Omega Ruby & Alpha Sapphire\n**xy_gba** = Pokemon Omega Ruby & Alpha Sapphire GBA\n\n**bw** = Black & White Animated\n**bw_no** = Black & White\n\n**dp** = Diamond, Pearl & Platinum\n**hg** = HeartGold\n**ss** = SoulSilver\n\n**rs** = Ruby & Saphhire\n**em** = Emerald Animated\n**frlg** = FireRed & LeafGreen\n\n**gold** = Gold\n**silver** = Silver\n**crystal** = Crystal Animated\n\n**rg** = Red & Green(JP) Colored\n**rg_gray** = Red & Green(JP)\n**rb** = Red & Blue(EN) Colored\n**rb_gray** = Red & Blue(EN)\n**yellow** = Yellow Colored GBC\n**y_gb** = Yellow Colored GB\n**y_gray** = Yellow');
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
