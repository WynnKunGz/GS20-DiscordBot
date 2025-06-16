const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');

module.exports = {
      name: 'giftedsciencehelp',
      description: 'Help for the giftedscience command',
      devOnly: false,
      GSOnly: true,
      deleted: false,

      callback: async (client, interaction) => {
         const giftedScienceHelpEmbed = new EmbedBuilder()
         .setColor(0x58BFE8)
         .setTitle('Gfited Science Help!')
         .setAuthor({ name : 'GS20' })
         .setDescription('Available GS20 members\' name to query')
         .addFields(
            {
               name : 'Available names',
               value : 'ต้นข้าว ข้าวป้าง หมิว แพรดาว แทม ใบตอง จ๊ะจ๋า พีช ยูจิณ โอปอล์ น้ำว้า มายด์ หลิง เอม ไอล่า ดิว ธาม บัส กร ภีม วินชนกันต์ บีม นภ โฟร์ เฟิร์ม ตี๋น้อย ธรรม์ ลิ้ม ริว วินปภาวิน เคนโด้ ต้น ป่าน ปลื้ม พอร์ช แม็กซ์ ออโต้ ออกัส ศีล พูห์ นับ ครีม น้ำ โจฮัน',
            },
         )
         .setTimestamp()
         .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
         .setFooter({ text: `GS20 | Version ${version} | By Wynn & Porsche` });

         interaction.reply({ embeds : [ giftedScienceHelpEmbed ] });
      },
};