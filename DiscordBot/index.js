
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
const { isBuffer } = require('util');

client.commands = new Discord.Collection();




//------




//const commandFiles = fs.readdirSync('./Main/').filter(file => file.endsWith('.js'));
//for(const file of commandFiles){
   // const command = require(`./Main/${file}`);
 
   // client.commands.set(command.name, command);
//}

const modFiles = fs.readdirSync('./Moderation/').filter(file => file.endsWith('.js'));
for(const file of modFiles){
    const modcommand = require(`./Moderation/${file}`);
 
    client.commands.set(modcommand.name, modcommand);
} 

const funFiles = fs.readdirSync('./Fun/').filter(file => file.endsWith('.js'));
for(const file of funFiles){
    const funcommand = require(`./Fun/${file}`);
 
    client.commands.set(funcommand.name, funcommand);
} 

const hubFiles = fs.readdirSync('./Hub/').filter(file => file.endsWith('.js'));
for(const file of hubFiles){
    const hubcommand = require(`./Hub/${file}`);
 
    client.commands.set(hubcommand.name, hubcommand);
} 

const generalFiles = fs.readdirSync('./General/').filter(file => file.endsWith('.js'));
for(const file of generalFiles){
    const gencommand = require(`./General/${file}`);
 
    client.commands.set(gencommand.name, gencommand);
} 

//------


client.once('ready', () => {
    console.log('Bot online.');
    client.user.setActivity(`!help`);
});

 

//------


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

if(command === 'serverinfo'){
    client.commands.get('serverinfo').execute(message, args);
}

if(command === 'commands'){
    client.commands.get('commands').execute(message, args);
}

if(command === 'help'){
    client.commands.get('help').execute(message, args);
}

if(command === 'info'){
    client.commands.get('info').execute(message, args);
}

if(command === 'gayr8'){
    client.commands.get('gayr8').execute(message, args);
}


if(command === 'penis'){
    client.commands.get('penis').execute(message, args);
}

if(command === 'ping'){
    client.commands.get('ping').execute(message, args);
}

if(command === 'urmomsweight'){
    client.commands.get('urmomsweight').execute(message, args);
}








});




client.login(process.env.DJS_TOKEN);