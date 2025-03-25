// const { EmbedBuilder } = require('discord.js');
// const { version } = require('../../../package.json');

// module.exports = {
//    deleted: true,
//    name: 'giftedscience',
//    description: 'Gives our classmates\' basic information',
//    devOnly: false,
//    testOnly: true,
//    options: [
//       {
//          name: 'mode',
//          description: 'Choose between modes',
//       }
//    ]

//       run(client, message, args) {
//          const giftedscience = new Discord.MessageEmbed()
//          .setColor('RANDOM')
//          .setTitle('Gifted Science 20 Members')
//          .setAuthor('Quantum x GS20')
//          .setDescription('List of Gifted Science 20 Members')
//          .addFields(
//             args,
//          )
//          .setTimestamp()
//          .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

//          message.channel.send(giftedscience);
//       },
// };

// console.log('GIFTEDSCIENCE command is ready!');