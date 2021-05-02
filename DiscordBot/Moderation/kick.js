module.exports = {
    name: 'kick',
    description: "kick a member: +kick <user>  <reason>",
    execute(message, args){
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**You need `KICK_MEMBERS` permission to do this.**")
    let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
    if (!args[0]){
        message.channel.send("**No user provided retard**");
        return;
    };
    if (!User) return message.channel.send('**Invalid user dumbass**')
    
        
        const Admin = "ADMINISTRATOR"      
    
    
    
        if (User.hasPermission(Admin)) return message.reply("**Invalid permissions dumbass**")



    let kickReason = args.slice(1).join(' ');
    if (!kickReason){
        kickReason = "No reason provided."
    }

    User.kick({reason: kickReason})
    const Discord = require('discord.js');
    const kickEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTimestamp()
    .setAuthor('Kick')
    .setDescription(`${User} got kicked lmao`);
    message.channel.send({
        embed: kickEmbed
    });
    
    
    
    }};