// const Discord = require('discord.js');
// const { version } = require('../package.json');

// module.exports = {
//       name: 'help',
//       aliase: ['info'],
//       description: 'Help Command',
//       args: true,

//       async run(client, message) {
//          const help = new Discord.MessageEmbed()
//          .setColor('RANDOM')
//          .setTitle('Help!')
//          .setAuthor('Quantum x GS20')
//          .setDescription('Commands List')
//          .addFields(
//             { name : '1. ping', value : 'Sends the bot\'s ping.', inline : true },
//             { name : '2. serverinfo', value : 'Sends the Server\'s Information.', inline : true },
//             { name : '3. userinfo', value : 'Sends the User\'s Information.', inline : true },
//             { name : '4. quantum', value : 'Sends the link to Quantum\'s Carrd Website', inline : true },
//             { name : '5. giftedscience [args]', value : 'Sends a full list of Gifted Science 20 Members', inline : true },
//          )
//          .setTimestamp()
//          .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

//          message.channel.send({ embeds : [ help ] });
//       },
// };

// console.log('HELP command is ready!');