const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
      name: 'userinfo',
      description: 'Sends the user\'s information',
      deleted: false,
      devOnly: false,
      testOnly: true,

      callback: async (client, interaction) => {
        const { user, guild } = interaction;

        const userInfoEmbed = new EmbedBuilder()
          .setColor(0xC7FF4F)
          .setTitle('User Information')
          .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
          .setAuthor({ name: 'GS20' })
          .addFields(
            {
              name : 'Username',
              value : `${user.username}`,
              inline : true,
            },
            {
              name: 'Tag',
              value: `${user.tag}`,
              inline: true,
            },
            {
              name : 'ID',
              value : `${user.id}`,
              inline : true,
            },
            {
              name : 'Created On',
              value : `${user.createdAt.toDateString()}`,
              inline : true,
            },
            {
              name : 'Joined Server On',
              value : `${guild.joinedAt.toDateString()}`,
              inline : true,
            },
          )
          .setTimestamp()
          .setFooter({ text : `Quantum x GS20 | Version ${version} | By Wynn & Porsche` });

        interaction.reply({ embeds : [ userInfoEmbed ] });
      },
};