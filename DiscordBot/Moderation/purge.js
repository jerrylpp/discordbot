module.exports = {
    name: 'purge',
    description: "purges given number of messages below 100",
    execute(message, args){
        
        if (!message.member.hasPermission("MANAGE_MESSAGES"))return message.reply('**You need `administrator` or `manage messages` permissions to do this!**');
        const amount = args.join(' '); 
        if (!amount) return message.reply('**Give me a number of messages to purge dumbass**'); 
        if (isNaN(amount)) return message.reply('**Thats not a number :3head:**'); 

        if (amount > 100) return message.reply('**You cant delete more than 100 messages at once :3head:**'); 
        if (amount < 1) return message.reply('**You have to delete at least 1 message :3head:**'); 

        message.channel.messages.fetch({ limit: amount }).then(messages => { message.channel.bulkDelete(messages).then(message.channel.send(`
        **Succsesfully deleted \`${messages.size}/${amount}\` messages**`)).then(msg => msg.delete({timeout: 4000}))}


        
    
        )}}
