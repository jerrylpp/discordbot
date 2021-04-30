module.exports = {
name: 'negus',
description: 'null',
execute(message, args){
    
    min = Math.ceil(1);
    max = Math.floor(100);
    const negus = Math.floor(Math.random() * (max - min + 1)) + min;

    message.channel.send(`ur ${negus}% negus`)
}
}