const Discord = require('discord.js')

module.exports = {
    name: "urmomsweight",
    description: "none",
    execute(message, args){
        
        
min = Math.ceil(400);
max = Math.floor(600);
const weight = Math.floor(Math.random() * (max - min + 1)) + min;

message.channel.send(`ur mom is ${weight} kg bruh she fat`)

    }}