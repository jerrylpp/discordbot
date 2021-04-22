module.exports = {
    name: 'say',
    description: "bot will type what u tell it to type",
    execute(message, args){
const Discord = require('../Commands/node_modules/discord.js.js')
const output = args.join(' ')

if (!args[0]) return message.reply('what tf do you want me to say retard')


//if (!message.member.hasPermission("MANAGE_MESSAGES"))return message.reply('**you need `manage messages` permissions!**')


message.channel.send(output);
message.delete();
}}