const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
      name: 'serverinfo',
      description: 'Sends the server\'s information',
      deleted: false,
      testOnly: true,
      devOnly: false,

      callback: async (client, interaction) => {
         if (!interaction.inGuild()) {
            interaction.reply({
               content: 'You can only run this command inside a server.',
               ephemeral: true,
            });
            return;
         }

         const { guild } = interaction;
         const serverInfoEmbed = new EmbedBuilder()
         .setColor(0xFFD278)
         .setTitle('Server Information')
         .setAuthor({ name: 'GS20' })
         .setDescription('GS20 Server Information')
         .addFields(
            {
               name : 'Server Name',
               value : `${guild.name}`,
               inline: true,
            },
            {
               name: 'Server ID',
               value: `${guild.id}`,
               inline: true,
            },
            {
               name : 'Server Description',
               value : `${guild.description}`,
               inline: false,
            },
            {
               name : 'Total Members',
               value : `${guild.memberCount}`,
               inline: true,
            },
            {
               name : 'Server Owner',
               value : `${(await guild.fetchOwner()).user.username}`,
               inline: true,
            },
            {
               name : 'Server Created On',
               value : `${guild.createdAt.toDateString()}`,
               inline: true,
            },
            {
               name : 'Server Boost Level and Server Boost Count',
               value : `Boost Level ${guild.premiumTier} | ${guild.premiumSubscriptionCount} boost(s)`,
               inline: false,
            },
            {
               name : 'Server Roles and Emojis',
               value : `${guild.roles.cache.size} roles and ${guild.emojis.cache.size} emojis`,
               inline: false,
            },
            {
               name : 'Server Channels',
               value : `${guild.channels.cache.size} channels`,
               inline: true,
            },
            {
               name : 'Server Text Channels',
               value : `${guild.channels.cache.filter((c) => c.type === 0).toJSON().length} channels`,
               inline: true,
            },
            {
               name : 'Server Voice Channels',
               value : `${guild.channels.cache.filter((c) => c.type === 2).toJSON().length} channels`,
               inline: true,
            },
            {
               name : 'Server AFK Channel and AFK Timeout',
               value : `${guild.afkChannel}` + '| ' + `${guild.afkTimeout}` / 60 + ' minutes',
               inline: false,
            },
            {
               name : 'Server System Channel',
               value : `${guild.systemChannel}`,
               inline: true,
            },
            {
               name : 'Server Rules Channel',
               value : `${guild.rulesChannel}`,
               inline: true,
            },
            {
               name : 'Server Public Updates Channel',
               value : `${guild.publicUpdatesChannel}`,
               inline: true,
            },
            {
               name : 'Server Preferred Locale',
               value : `${guild.preferredLocale}`,
               inline: true,
            },
            {
               name : 'Server Max Video Channel Users',
               value : `${guild.maxVideoChannelUsers} users`,
               inline: true,
            },
            {
               name : 'Server Max Members',
               value : `${guild.maximumMembers} members`,
               inline: true,
            },
            {
               name : 'Server Max Bitrate',
               value : `${guild.maximumBitrate}` / 1000 + ' kpbs',
               inline: true,
            },
         )
         .setTimestamp()
         .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
         .setFooter({ text: `GS20 | Version ${version} | By Wynn & Porsche` });

         interaction.reply({ embeds : [ serverInfoEmbed ] });
      },
};