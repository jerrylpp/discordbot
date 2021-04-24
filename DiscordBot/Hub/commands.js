const Discord = require('discord.js')


module.exports = {
    name: 'commands',
    description: "lists commands",
    execute(message, args){
    
    let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("**List of Commands**")
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    
    .addField(`Moderation Commands:`, '`!ban`, `!kick`, `!purge`, `!serverinfo`')
    .addField(`Fun Commands:`, '`!say <>`, `!gayr8`,')
    .addField(`Help Commands:`, '`!help`, `!info`,')
    
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
    
    
    message.channel.send(embed);    
    
    }};