module.exports = {
      name: 'ping',
      description: 'Pong!',
      // devOnly : Boolean,
      // testOnly : Boolean,
      // options: Object[],
      // deleted: Boolean,

      callback: (client, interaction) => {
            interaction.reply(`Pong! ${client.ws.ping} ms`);
      },
      // const Discord = require('discord.js');
      // const { version } = require('../../../package.json');

      // async run(client, message) {
      //       const ping = new Discord.MessageEmbed()
      //       .setColor('RANDOM')
      //       .setTitle('Pong!')
      //       .setAuthor('Quantum x GS20')
      //       .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``)
      //       .setTimestamp()
      //       .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

      //       message.channel.send({ embeds : [ ping ], allowedMentions: { repliedUser: false } });
      // },
};

console.log('PING command is now ready!');