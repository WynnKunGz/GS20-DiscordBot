const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
      name: 'ping',
      description: 'Ping!',
      args: false,

      async run(client, message) {
            const ping = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Pong!')
            .setAuthor('Quantum x GS20')
            .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``)
            .setTimestamp()
            .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

            message.channel.send(ping);
      },
};

console.log('PING command is ready!');