const { Canvas } = require('canvas-constructor');
const fsn = require('fs-nextra');
exports.run = async (client, message, args) => {
const getBeautiful = async (person) => {
  const plate = await fsn.readFile('./assets/plate_beautiful.png');
  const png = person
  const { body } = await snek.get(png);
  return new Canvas(634, 675)
    .setColor('#000000')
    .addRect(0, 0, 634, 675)
    .addImage(body, 423, 45, 168, 168)
    .addImage(body, 426, 382, 168, 168)
    .addImage(plate, 0, 0, 634, 675)
    .toBuffer();
};
try {
      const msg = await message.channel.send('Admiring the painting...');
      const result = await getBeautiful(person.avatarURL({ format:"png", size:256 }));
      await message.channel.send({ files: [{ attachment: result, name: 'beautiful.jpg' }] });
      await msg.delete();
 }
