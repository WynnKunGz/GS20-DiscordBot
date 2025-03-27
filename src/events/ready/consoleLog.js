const { name, version, description, author, main, license } = require('../../../package.json');
const { ActivityType } = require('discord.js');

module.exports = (client) => {
   console.log('HELP command is ready!');
   console.log('PING command is now ready!');
   console.log('GIFTEDSCIENCE command is ready!');
   console.log('GIFTEDSCIENCEHELP command is ready!');
   console.log('QUANTUM command is ready!');
   console.log('SERVERINFO command is ready!');
   console.log('USERINFO command is ready!');
   console.log('EVENTS command is ready!');
   console.log('============================================');
   console.log('All commands are now ready!');
   console.log(`${client.user.username} is now online!`);
   console.log(`Name : ${name}`);
   console.log(`Version : ${version}`);
   console.log(`Description : ${description}`);
   console.log(`Author : ${author}`);
   console.log(`Main File : ${main}`);
   console.log(`License : ${license}`);
   client.user.setActivity({
      name: '/help',
      type : ActivityType.Listening,
   });
};