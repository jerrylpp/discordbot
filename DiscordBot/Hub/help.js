const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "general help hub",
    execute(message, args){
    let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("**Help Menu**")
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    
    .addField(`View the List of Commands`, '`!commands`')
    .addField(`General Info Regarding the Bot`, '`!info`')
    
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
        message.channel.send(embed);    
    }
};