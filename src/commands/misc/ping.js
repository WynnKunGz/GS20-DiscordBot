const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
      name: 'ping',
      description: 'Sends the ping. [Use this one]',
      devOnly : false,
      testOnly : true,
      // options: Object[],
      deleted: false,

      callback: async (client, interaction) => {
            await interaction.deferReply();
            const reply = await interaction.fetchReply();
            const ping = reply.createdTimestamp - interaction.createdTimestamp;

            const pingEmbed = new EmbedBuilder()
            .setTitle('Pong!')
            .setAuthor({ name : 'Quantum x GS20' })
            .addFields(
                  {
                        name: '🏓Client',
                        value: `${ping} ms`,
                        inline: true,
                  },
                  {
                        name: 'Websocket',
                        value: `${client.ws.ping} ms`,
                        inline: true,
                  },
            )
            .setColor(0xD64040)
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
            .setFooter({ text : `Quantum x GS20 | Version ${version} | By Wynn & Porsche` });

            interaction.editReply({ embeds: [pingEmbed] });
      },
};
if (!this.deleted) {
console.log('PING command is now ready!');
}