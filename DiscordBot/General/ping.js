module.exports = {
    name: 'ping',
    description: 'nah',
    execute(message, args){
        message.channel.send(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}