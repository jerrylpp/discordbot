const { execute } = require("../Moderation/ban");

module.exports = {
    name: "gayr8",
    description: "null",
    execute(message, args){
        
        
min = Math.ceil(1);
max = Math.floor(100);
const gayrate = Math.floor(Math.random() * (max - min + 1)) + min;

if(gayrate < 99) return (message.channel.send(
    'nigga ur 100% gay'
));
 
if(gayrate = 69) return (message.channel.send(
    'bruh ur 69% gay'
));

message.channel.send(`You are ${gayrate}% gay`);

    

    
}
}