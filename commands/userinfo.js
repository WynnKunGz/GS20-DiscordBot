const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
      name: 'userinfo',
      aliases: ['user'],
      description: 'Sends the user\'s information',
      args: false,

      async run(client, message) {
         const userinfo = new Discord.MessageEmbed()
         .setColor('RANDOM')
         .setTitle('User Information')
         .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
         .setAuthor('Quantum x GS20')
         .setDescription('User Information')
         .addFields(
            { name : 'User Name', value : `${message.author.username}`, inline : true },
            { name : 'Discriminator', value : `${message.author.discriminator}`, inline : true },
            { name : 'ID', value : `${message.author.id}`, inline : false },
            { name : 'Created At', value : `${message.author.createdAt}`, inline : false },
            { name : 'Joined At', value : `${message.member.joinedAt}`, inline : false },

         )
         .setTimestamp()
         .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

         message.channel.send(userinfo);
      },
};

console.log('USERINFO command is ready!');