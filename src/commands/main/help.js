const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
      name: 'help',
      description: 'Help Command',
      devOnly: false,
      testOnly: true,

      callback: async (client, interaction) => {
         const helpEmbed = new EmbedBuilder()
         .setColor('Random')
         .setTitle('Help!')
         .setAuthor('Quantum x GS20')
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
               value : 'Sends a full list of Gifted Science 20 Members',
               inline : true,
            },
         )
         .setTimestamp()
         .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
         .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

         interaction.reply({ embeds : [ helpEmbed ] });
      },
};
if (!this.deleted) {
console.log('HELP command is ready!');
}