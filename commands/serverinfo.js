const Discord = require('discord.js');
const { version } = require('../package.json');

module.exports = {
      name: 'serverinfo',
      aliases: ['serv'],
      description: 'Sends the server\'s basic information',
      args: false,

      async run(client, message) {
         const serverinfo = new Discord.MessageEmbed()
         .setColor('RANDOM')
         .setTitle('Server Information')
         .setThumbnail('https://cdn.discordapp.com/icons/973942925337706656/1f3faf280c03e18fa0c3c06ff007f51f.webp')
         .setAuthor('Quantum x GS20')
         .setDescription('เตรียมลิขิต GS20 Server Information')
         .addFields(
            { name : 'Server Name', value : `${message.guild.name}` },
            { name : 'Total Members', value : `${message.guild.memberCount}` },
            { name : 'Server Owner', value : `${message.guild.owner}` },
            { name : 'Server Created At', value : `${message.guild.createdAt}` },
            // { name : 'Server Boost Level', value : `${message.guild.premiumTier}` },
            // { name : 'Server Boost Count', value : `${message.guild.premiumSubscriptionCount}` },
            { name : 'Server Roles', value : `${message.guild.roles.cache.size}` },
            { name : 'Server Emojis', value : `${message.guild.emojis.cache.size}` },
            { name : 'Server Channels', value : `${message.guild.channels.cache.size}` },
            { name : 'Server Text Channels', value : `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}` },
            { name : 'Server Voice Channels', value : `${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}` },
            { name : 'Server AFK Channel', value : `${message.guild.afkChannel}` },
            { name : 'Server AFK Timeout', value : `${message.guild.afkTimeout}` / 60 + ' minutes' },
            { name : 'Server System Channel', value : `${message.guild.systemChannel}` },
            { name : 'Server Explicit Content Filter', value : 'Scans from ' + `${message.guild.explicitContentFilter}` },
            { name : 'Server Default Message Notifications', value : `${message.guild.defaultMessageNotifications}` },
            // { name : 'Server MFA Level', value : `${message.guild.mfaLevel}` },
            // { name : 'Server Vanity URL Code', value : `${message.guild.vanityURLCode}` },
            // { name : 'Server Banner', value : `${message.guild.banner}` },
            { name : 'Server Description', value : `${message.guild.description}` },
            // { name : 'Server Discovery Splash', value : `${message.guild.discoverySplash}` },
            { name : 'Server Rules Channel', value : `${message.guild.rulesChannel}` },
            // { name : 'Server Public Updates Channel', value : `${message.guild.publicUpdatesChannel}` },
            { name : 'Server Preferred Locale', value : `${message.guild.preferredLocale}` },
            { name : 'Server Partnered', value : `${message.guild.partnered}` },
            // { name : 'Server Max Video Channel Users', value : `${message.guild.maxVideoChannelUsers}` },
            // { name : 'Server Max Presences', value : `${message.guild.maxPresences}` },
            // { name : 'Server Max Members', value : `${message.guild.maxMembers}` },
            // { name : 'Server Max Bitrate', value : `${message.guild.maxBitrate}` },
            // { name : 'Server Joined At', value : `${message.guild.joinedAt}` },
            // { name : 'Server ID', value : `${message.guild.id}` },
            // { name : 'Server Features', value : `${message.guild.features}` },
            // { name : 'Server Application ID', value : `${message.guild.applicationID}` },
            // { name : 'Server Afk Channel ID', value : `${message.guild.afkChannelID}` },
            // { name : 'Server System Channel ID', value : `${message.guild.systemChannelID}` },
            // { name : 'Server Rules Channel ID', value : `${message.guild.rulesChannelID}` },
            // { name : 'Server Public Updates Channel ID', value : `${message.guild.publicUpdatesChannelID}` },
            // { name : 'Server Widget Channel ID', value : `${message.guild.widgetChannelID}` },
            // { name : 'Server Widget Enabled', value : `${message.guild.widgetEnabled}` },
            // { name : 'Server Splash', value : `${message.guild.splash}` },
            // { name : 'Server Vanity URL Uses', value : `${message.guild.vanityURLUses}` },
         )
         .setTimestamp()
         .setFooter(`Quantum x GS20 | Version ${version} | By Wynn & Porsche`);

         message.channel.send(serverinfo);
      },
};

console.log('SERVERINFO command is ready!');