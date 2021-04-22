module.exports = {
    name: 'ban',
    description: "ban a member: +ban <user>  <reason>",
    execute(message, args){
    
    
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**You need `ban members` permission to do this.**")
    
    
    let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
    
    
    if (!args[0]){
        message.channel.send("**No user provided dumbass**");
        return;
    };
    if (!User) return message.channel.send('**Invalid user dumbass**')
    
    const Admin = "ADMINISTRATOR"      
    
    if (User.hasPermission(Admin)) return message.reply("**Invalid permissions dumbass**")

    let banReason = args.slice(1).join(' ');
    if (!banReason){
        banReason = "No reason provided."
    }

    User.ban({reason: banReason})
    const Discord = require('../Commands/node_modules/discord.js.js');
    const banEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor('Ban')
    .setDescription(`${User} got cripped`);
    message.channel.send({
        embed: banEmbed
    });
    
    
    
}};
    
