require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
   intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      IntentsBitField.Flags.GuildModeration,
      IntentsBitField.Flags.GuildIntegrations,
      IntentsBitField.Flags.GuildWebhooks,
      IntentsBitField.Flags.GuildInvites,
      IntentsBitField.Flags.GuildVoiceStates,
      IntentsBitField.Flags.GuildPresences,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.GuildMessageReactions,
      IntentsBitField.Flags.GuildMessageTyping,
      IntentsBitField.Flags.DirectMessages,
      IntentsBitField.Flags.DirectMessageReactions,
      IntentsBitField.Flags.DirectMessageTyping,
   ],
});

const eventHandler = require('./handlers/eventHandler');
eventHandler(client);

client.login(process.env.TOKEN);