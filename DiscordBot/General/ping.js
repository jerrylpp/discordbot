module.exports = {
    name: 'ping',
    description: 'nah',
    execute(message, args){
        message.reply('Calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            message.reply(`Bot latency: ${ping}, API latency: ${client.ws.ping}`)


        })
        


    },
        
}
