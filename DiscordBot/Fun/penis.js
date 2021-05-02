const Discord = require('discord.js')

module.exports = {
    name: 'penis',
    description: 'description',
    execute(message, args){
        min = Math.ceil(2);
        max = Math.floor(10);
        const length = Math.floor(Math.random() * (max - min + 1)) + min;
    
        message.channel.send(`your penis is ${length} inches long`)
        
    
    }
}