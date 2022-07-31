const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const { name } = require('./package.json');
const { version } = require('./package.json');
const { description } = require('./package.json');
const { author } = require('./package.json');
const { main } = require('./package.json');
const { license } = require('./package.json');
const { readdirSync } = require('fs');
const { join } = require('path');
client.commands = new Discord.Collection();
const prefix = 'q.';

const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
   const command = require(join(__dirname, 'commands', `${file}`));
   client.commands.set(command.name, command);
}

client.on('error', console.error);

client.once('ready', () => {
   console.log('============================================');
   console.log('All commands are now registered and ready!');
   console.log('I\'m Online!');
   console.log(`Name : ${name}`);
   console.log(`Version : ${version}`);
   console.log(`Description : ${description}`);
   console.log(`Author : ${author}`);
   console.log(`Main File : ${main}`);
   console.log(`License : ${license}`);
   client.user.setActivity('q.help', { type : 'LISTENING' });
});

client.on('message', async message => {
   if(message.author.bot || message.channel.type === 'dm') return;

   if(message.content.startsWith(prefix)) {
         const args = message.content.slice(prefix.length).trim().split(/ +/);
         const command = args.shift().toLowerCase();
         if(!client.commands.has(command)) return;

         try {
            client.commands.get(command).run(client, message, args);
         }
         catch (error) {
            console.error(error);
            message.reply('There was a problem executing that command!');
         }
   }
});

client.login(token);