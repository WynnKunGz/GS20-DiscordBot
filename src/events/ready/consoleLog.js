const { name, version, description, author, main, license } = require('../../../package.json');
const { ActivityType } = require('discord.js');

module.exports = (client) => {
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
      name: 'q.help',
      type : ActivityType.Listening,
   });
};