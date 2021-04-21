const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
const { isBuffer } = require('util');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
 
    client.commands.set(command.name, command);
}

const modFiles = fs.readdirSync('./Moderation/').filter(file => file.endsWith('.js'));
for(const file of modFiles){
    const modcommand = require(`./Moderation/${file}`);
 
    client.commands.set(modcommand.name, modcommand);
} 

client.once('ready', () => {
    console.log('Bot online.');
    client.user.setActivity(`Dababy Car Driving 3D`);
});

 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    
    const command = args.shift().toLowerCase();


if(command === 'jerry'){
    client.commands.get('jerry').execute(message, args);
}

if(command === 'liam'){
    client.commands.get('liam').execute(message, args);
}

if(command === 'ban'){
    client.commands.get('ban').execute(message, args);
}

if(command === 'kick'){
    client.commands.get('kick').execute(message, args);
}

if(command === 'say'){
    client.commands.get('say').execute(message, args);
}

if(command === 'purge'){
    client.commands.get('purge').execute(message, args);
}




});



client.login('ODM0MjQxNzg5ODIwMjcyNzAw.YH-CNg.V4P9LEq-8y2X3RlG49lPduwVaY8');