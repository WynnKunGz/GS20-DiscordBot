const { devs, serverGiftedScience } = require('../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client, interaction) => {
   if (!interaction.isChatInputCommand()) return;

   const localCommands = getLocalCommands();

   try {
      const commandObject = localCommands.find(
         (cmd) => cmd.name === interaction.commandName);

      if (!commandObject) return;

      if (commandObject.devOnly) {
         if (!devs.includes(interaction.member.id)) {
            interaction.reply({
               content: 'You are not allowed to run this command. Must have the permission "Administrator" or higher.',
               ephemeral: true,
            });
            return;
         }
      }

      if (commandObject.GSOnly) {
         if (!(interaction.guild.id === serverGiftedScience)) {
            interaction.reply({
               content: 'This command cannot be run here.',
               ephemeral: true,
         });
         return;
         }
      }

      if (commandObject.permissionsRequired?.length) {
         for (const permission of commandObject.permissionsRequired) {
            if (!interaction.member.permissions.has(permission)) {
               interaction.reply({
                  content: 'You do not have the permission to run this command.',
                  ephemeral: true,
               });
               return;
            }
         }
      }

      if (commandObject.botPermissions?.length) {
         for (const permission of commandObject.botPermissions) {
            const bot = interaction.guild.members.me;

            if (!bot.permissions.has(permission)) {
               interaction.reply({
                  content: 'I do not have enough permissions to run this command.',
                  ephemeral: true,
               });
               return;
            }
         }
      }

      await commandObject.callback(client, interaction);
   }
   catch (error) {
      console.log(`⛔There was an error running this command: ${error}`);
   }
};