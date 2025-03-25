// Is no longer used as a new automatic command registration system has been integrated into the code.

// require('dotenv').config();
// const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

// const commands = [
//    {
//       name: 'ping',
//       description: 'Pong!',
//    },
//    {
//       name: 'giftedscience',
//       description: 'Gives our classmate\'s information.',
//       options: [
//          {
//             name: 'nickname',
//             description: 'ชื่อเล่น (ภาษาไทยเท่านั้น)',
//             type: ApplicationCommandOptionType.String,
//             required: true,
//          },
//       ],
//    },
// ];

// const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

// (async () => {
//    try {
//       console.log('Registering commands...');

//       await rest.put(
//          Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
//          { body : commands },
//       );

//       console.log('All commands are successfully registered and ready!');
//    }
//    catch (error) {
//       console.log(`There was an error : ${error}`);
//    }
// })();