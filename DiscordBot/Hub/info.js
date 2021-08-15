const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: "general information about the bot.",
    execute(message, args){
    let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("**Bot Info**")
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    
    .addField(`Big brain dev:`, '`pablo#0420 | 344662624534921226`')
    .addField(`Bot Version:`, '`v1.4.0`')
    

    .setFooter('Last updated May 6th, 2021')
    
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
        message.channel.send(embed);    
    }
};