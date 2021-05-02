const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'nah',
    execute(message, args){
        message.reply('Calculating ping...').then((resultMessage) => {
            const client = new Discord.Client();
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`Bot latency: ${ping}, API latency: ${msg.client.ws.ping}`)


        })
        


    },
        
}
