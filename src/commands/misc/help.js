const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
      name: 'help',
      description: 'Help!',
      devOnly: false,
      testOnly: true,

      callback: async (client, interaction) => {
         const helpEmbed = new EmbedBuilder()
         .setColor(0x4295ED)
         .setTitle('Help!')
         .setAuthor({ name : 'GS20' })
         .setDescription('Commands List')
         .addFields(
            {
               name : '1. ping',
               value : 'Sends the bot\'s ping.',
               inline : true,
            },
            {
               name : '2. serverinfo',
               value : 'Sends the Server\'s Information.',
               inline : true,
            },
            {
               name : '3. userinfo',
               value : 'Sends the User\'s Information.',
               inline : true,
            },
            {
               name : '4. quantum',
               value : 'Sends the link to Quantum\'s Carrd Website',
               inline : true,
            },
            {
               name : '5. giftedscience',
               value : 'Sends information of Gifted Science 20 Members',
               inline : true,
            },
            {
               name: '6. giftedsciencehelp',
               value: 'Sends a full list of available GS20 members to query in the giftedscience command.',
               inline: false,
            },
            {
               name: '7. events',
               value: 'Shows a full list of scheduled events in this server [Under development]',
               inline: false,
            },
         )
         .setTimestamp()
         .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
         .setFooter({ text: `GS20 | Version ${version} | By Wynn & Porsche` });

         interaction.reply({ embeds : [ helpEmbed ] });
      },
};