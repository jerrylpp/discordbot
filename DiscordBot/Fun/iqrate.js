const { execute } = require("../Moderation/ban");

module.exports = {
    name: "iqrate",
    description: "null",
    execute(message, args){
        
        
min = Math.ceil(1);
max = Math.floor(100);
const gayrate = Math.floor(Math.random() * (max - min + 1)) + min;

 message.channel.send(`You are ${gayrate}% gay`);
    


}
}