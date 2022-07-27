const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const { name } = require('./package.json');
const { version } = require('./package.json');
const { description } = require('./package.json');
const { author } = require('./package.json');
const { main } = require('./package.json');
const { license } = require('./package.json');

client.on('error', console.error);

client.on('ready', () => {
   console.log('============================================');
   console.log('All commands are now registered and ready!');
   console.log('I\'m Online!');
   console.log(`Name : ${name}`);
   console.log(`Version : ${version}`);
   console.log(`Description : ${description}`);
   console.log(`Author : ${author}`);
   console.log(`Main File : ${main}`);
   console.log(`License : ${license}`);
   client.user.setActivity('>help', { type : 'LISTENING' });
});

client.login(token);