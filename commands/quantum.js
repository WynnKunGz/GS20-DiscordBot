const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
      name: 'quantum',
      aliases: ['link', 'card', 'carrd', 'social'],
      description: 'Sends a link to Carrd website',
      args: false,

      async run(client, message) {
            const quantum = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Quantum x GS20\'s Social Media')
            .setURL('https://quantumxgs20.carrd.co')
            .setAuthor('Quantum x GS20')
            .setDescription('Link to Quantum x GS20\'s Carrd Website')
            .setTimestamp()
            .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

            message.channel.send(quantum);
      },
};

console.log('QUANTUM command is ready!');