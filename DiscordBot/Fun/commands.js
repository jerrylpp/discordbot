module.exports = {
    name: 'commands',
    description: "lists commands",
    execute(message, args){
    
    let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("**List of Commands**")
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField(`Moderator Commands:`, '`!ban`, `!kick`, `!purge`')
    .addField(`Fun Commands:`, '`!say <>`')
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
    
    
    message.channel.send(embed);    
    
    }};