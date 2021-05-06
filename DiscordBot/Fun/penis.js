const Discord = require('discord.js')

module.exports = {
    name: 'penis',
    description: 'description',
    execute(message, args){
        min = Math.ceil(2);
        max = Math.floor(12);
        const length = Math.floor(Math.random() * (max - min + 1)) + min;
    if(length == 2)message.channel.send(`${message.author.username}'s penis: 8==D`);
    if(length == 3)message.channel.send('ur penis: 8===D');
    if(length == 4)message.channel.send('ur penis: 8====D');
    if(length == 5)message.channel.send('ur penis: 8=====D');
    if(length == 6)message.channel.send('ur penis: 8======D');
    if(length == 7)message.channel.send('ur penis: 8=======D');
    if(length == 8)message.channel.send('ur penis: 8========D');
    if(length == 9)message.channel.send('ur penis: 8=========D');
    if(length == 10)message.channel.send('ur penis: 8==========D');
    if(length == 11)message.channel.send('ur penis: 8===========D');
    if(length == 12)message.channel.send('ur penis: 8============D');




   
        
    
    }
}