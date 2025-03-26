const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
   deleted: true,
   name: 'ban',
   description: 'Bans a member [Use this one]',
   options : [
      {
         name: 'target-user',
         description: 'The user to ban',
         required: true,
         type: ApplicationCommandOptionType.Mentionable,
      },
      {
         name: 'reason',
         description: 'The reason for the ban',
         required: true,
         type: ApplicationCommandOptionType.String,
      },
   ],
   permissionsRequired: [
      PermissionFlagsBits.Administrator,
   ],
   botPermissions: [
      PermissionFlagsBits.Administrator,
   ],
   devOnly: true,
   testOnly: true,

   callback: (client, interaction) => {
      interaction.reply(`Banning... ${client.name}`);
   },
};

if (this.deleted === false) {
   console.log('BAN command is now ready!');
}
