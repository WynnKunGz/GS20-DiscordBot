const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { version } = require('../../../package.json');
const getFormattedString = require('../../utils/getFormattedString');

module.exports = {
   name: 'giftedscience',
   description: 'Gives our classmates\' basic information',
   devOnly: false,
   testOnly: true,
   deleted: false,
   options: [
      {
         name: 'query',
         description: 'Nickname. For more information run /giftedsciencehelp',
         required: true,
         type: ApplicationCommandOptionType.String,
      },
   ],

   callback: async (client, interaction) => {
      const jsonData = getFormattedString();
      const array = JSON.parse(jsonData);
      const map = new Map(array.map(obj => [obj.id, obj]));
      const searchId = interaction.options.get('query').value;
      const information = map.get(searchId);

         const giftedScienceEmbed = new EmbedBuilder()
         .setColor(0xC26DDE)
         .setTitle('Gifted Science 20 Members')
         .setAuthor({ name : 'GS20' })
         .setDescription('Information of Gifted Science 20 Members')
         .addFields(
            {
               name: 'ชื่อ-นามสกุล',
               value: `${information.fullName}`,
               inline: true,
            },
            {
               name: 'ชื่อเล่น',
               value: `${information.nickname}`,
               inline: true,
            },
            {
               name: 'IG',
               value: `https://instagram.com/${information.instagram}`,
               inline: false,
            },
            {
               name: 'วันเกิด',
               value: `${information.birthday}`,
               inline: true,
            },
            {
               name: 'คณะและมหาวิทยาลัยที่ศึกษาอยู่',
               value: `${information.university}`,
               inline: true,
            },
         )
         .setTimestamp()
         .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
         .setFooter({ text: `GS20 | Version ${version} | By Wynn & Porsche` });

         interaction.reply({ embeds : [giftedScienceEmbed] });
      },
};