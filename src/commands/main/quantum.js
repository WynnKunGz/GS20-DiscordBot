const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
      name: 'quantum',
      description: 'Sends a link to Carrd website',
      deleted: false,
      devOnly: false,
      GSOnly: true,

      callback: async (client, interaction) => {
            const quantumEmbed = new EmbedBuilder()
            .setColor(0x8B35FC)
            .setTitle('Quantum x GS20\'s Social Media')
            .setURL('https://quantumxgs20.carrd.co')
            .setAuthor({ name: 'GS20' })
            .setDescription('Link to Quantum x GS20\'s Carrd Website')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
            .setFooter({ text : `GS20 | Version ${version} | By Wynn & Porsche` });

            interaction.reply({ embeds : [ quantumEmbed ] });
      },
};