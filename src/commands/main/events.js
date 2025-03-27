const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
  name: 'events',
  description: 'Scheduled Events',
  deleted: true,
  devOnly: false,
  testOnly: true,

  callback: (client, interaction) => {
    if(!interaction.inGuild()) {
      interaction.reply({
        content: 'You can only run this command inside a server.',
        ephemeral: true,
      });
      return;
    }

    const { guild } = interaction;
    const eventsEmbed = new EmbedBuilder()
    .setColor(0x99FFDB)
    .setTitle('Scheduled Events')
    .setAuthor({ name: 'GS20' })
    .setDescription('Events happening soon...')
    .addFields(
      {
        name: 'Scheduled Events',
        value: `${guild.scheduledEvents}`,
        inline: false,
      },
    )
    .setTimestamp()
    .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
    .setFooter({ text: `GS20 | Version ${version} | By Wynn & Porsche` });

    interaction.reply({ embeds : [ eventsEmbed ] });
  },
};