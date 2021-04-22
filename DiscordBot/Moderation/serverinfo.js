const Discord = require('../Commands/node_modules/discord.js.js');


module.exports = {
    name: 'serverinfo',
    description: "this is a command",
    execute(message, args){
    let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("**Server Information**")
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField(`Server name:`, message.guild.name, true)
    .addField(`Server ID:`, message.guild.id, true)
    .addField(`Server owner:`, message.guild.owner, true)  
    .addField(`Server region:`, message.guild.region, true)
    .addField(`Members:`, message.guild.members.cache.size, true)
    .addField(`Bots:`, message.guild.members.cache.filter(member => member.user.bot).size, true)
    .addField(`Weights:`, message.guild.members.cache.filter(member => !member.user.bot).size, true)
    .addField(`Emojis:`, message.guild.emojis.cache.size, true)
    .addField(`Animated Emojis:`,message.guild.emojis.cache.filter(emoji => emoji.animated).size,true )
    .addField(`Text Channels:`, message.guild.channels.cache.filter(channel => channel.type === 'text').size, true)
    .addField(`Voice Channels:`, message.guild.channels.cache.filter(channel => channel.type === 'voice').size, true)
    .addField(`Roles:`, message.guild.roles.cache.size, true)
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
        message.channel.send(embed);    
    }
};
    

