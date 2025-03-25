require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
   intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
      // IntentsBitField.Flags.GuildModeration,
      // 'GuildIntegrations',
      // 'GuildWebhooks',
      // 'GuildInvites',
      // 'GuildVoiceStates',
      // 'GuildPresences',
      // 'GuildMessages',
      // 'GuildMessageReactions',
      // 'GuildMessageTyping',
      // 'DirectMessages',
      // 'DirectMessageReactions',
      // 'DirectMessageTyping',
   ],
});

const eventHandler = require('./handlers/eventHandler');
// const { readdirSync } = require('fs');
// const { join } = require('path');
// client.commands = new Discord.Collection();

// const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//    const command = require(join(__dirname, 'commands', `${file}`));
//    client.commands.set(command.name, command);
// }

   // client.on('interactionCreate', (interaction) => {
   //    if (!interaction.isChatInputCommand()) {
   //       return;
   //    }
   //    if (interaction.commandName === 'ping') {
   //       const pingEmbed = new EmbedBuilder()
   //       .setTitle('Pong!')
   //       .setAuthor({ name : 'Quantum x GS20' })
   //       .setDescription(`🏓\`${Date.now() - interaction.createdTimestamp} ms\``)
   //       .setColor(0xD64040)
   //       .setTimestamp()
   //       .setFooter({ text : `Quantum x GS20 | Version ${version} | By Wynn & Porsche` });

   //       interaction.reply({ embeds: [pingEmbed] });
   //    }
   //    if (interaction.commandName === 'giftedscience') {
   //       const membername = interaction.options.get('nickname').value;

   //       interaction.reply();
   //    }
   // });

   // client.on('messageCreate', (message) => {
   //    if (message.content === 'q.ping') {
   //       const pingEmbed = new EmbedBuilder()
   //       .setTitle('Pong!')
   //       .setAuthor({ name : 'Quantum x GS20' })
   //       .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``)
   //       .setColor(0xD64040)
   //       .setTimestamp()
   //       .setThumbnail('https://i.imgur.com/DmvVFIh.jpeg')
   //       .setFooter({ text : `Quantum x GS20 | Version ${version} | By Wynn & Porsche` });

   //       message.channel.send({ embeds: [pingEmbed] });
   //    }
   // });

// client.on('messageCreate',  (message) => {
//    if(message.author.bot || message.channel.type === 'dm') return;

//    if(message.content.startsWith(prefix)) {
//          const args = message.content.slice(prefix.length).trim().split(/ +/);
//          const command = args.shift().toLowerCase();
//          if(!client.commands.has(command)) return;

//          try {
//             client.commands.get(command).run(client, message, args);
//          }
//          catch (error) {
//             console.error(error);
//             message.reply('There was a problem executing that command!');
//          }
//    }
// });

eventHandler(client);

client.login(process.env.TOKEN);