// const Discord = require('discord.js');
// const { version } = require('../package.json');

// module.exports = {
//       name : 'stock',
//       description : 'Sends the information about current Quantum x GS20\'s Stock',
//       args: false,

//       async run(client, message) {
//             const stock = new Discord.MessageEmbed()
//             .setColor('RANDOM')
//             .setTitle('คลังสินค้า')
//             .setAuthor('Quantum x GS20')
//             .setDescription('ข้อมูลสินค้าทั้งหมด')
//             .addFields(
//                   { name : '1. หนังสือ Quantum 1.1', value : 'รายละเอียดสินค้า', inline : true },
//                   { name : '2. หนังสือ Quantum 1.2', value : 'รายละเอียดสินค้า', inline : true },
//                   { name : '3. สินค้า', value : 'รายละเอียดสินค้า', inline : true },
//             )
//             .setTimestamp()
//             .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

//             message.channel.send(stock);
//       },
// };

// console.log('STOCK command is ready!');