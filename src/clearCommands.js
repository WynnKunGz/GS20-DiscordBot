require('dotenv').config();
const { REST, Routes } = require('discord.js');
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// Create a REST instance. Make sure to set the token.
const rest = new REST({ version: '10' }).setToken(TOKEN);

// Clear commands for a specific guild.
function clearGuildCommands(guildId) {
   if (!guildId) throw new Error('You must provide a guild id.');

   console.log('Clearing commands...');

  // Clear the commands.
   rest
      .put(Routes.applicationGuildCommands(CLIENT_ID, guildId), { body: [] })
      .then(() => console.log(`Commands cleared for guild "${guildId}".`))
      .catch(console.error);
}

// Uncomment the next line to clear commands for a guild.
clearGuildCommands(GUILD_ID);