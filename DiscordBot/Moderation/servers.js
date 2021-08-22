const Discord = require('discord.js');
const client = new Discord.Client()

module.exports = {
    name: 'servers',
    description: "lists servers the bot is in through console.",
    execute(message, args){

        client.guilds.cache.forEach((guild) => {
            console.log(guild)
        }
        
        )

    }
}