module.exports = {
    name: 'say',
    description: "bot will type what u tell it to type",
    execute(message, args){
const Discord = require('discord.js')
const output = args.join(' ')

if (!args[0]) return message.reply('nah')


//if (!message.member.hasPermission("MANAGE_MESSAGES"))return message.reply('**you need `manage messages` permissions!**')


message.channel.send(output);
message.delete();
}}