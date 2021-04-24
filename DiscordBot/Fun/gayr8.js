const { execute } = require("../Moderation/ban");

module.exports = {
    name: "gayr8",
    description: "null",
    execute(message, args){
        
        
min = Math.ceil(1);
max = Math.floor(100);
const gayrate = Math.floor(Math.random() * (max - min + 1)) + min;

 message.channel.send(`You are ${gayrate}% gay`);
 if(gayrate < 50) then(message.channel.send('nigga ur gay'));
    

    
}
}