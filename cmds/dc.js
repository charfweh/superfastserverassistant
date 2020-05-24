module.exports.run = async (bot,message,args)=>{
    if(!args) return message.channel.send("Specify args")
    if(args){
        if(args.length > 5) return message.channel.send("Channel arguments should be less than 5")

        for(i = 0 ; i <  args.length; i++){
            let dc = message.guild.channels.filter(c=>c.name === args[i])
            if(dc.array().length == 0) message.channel.send(`No channels found with name ${args[i]}`)
            dc.forEach(element => {
                message.guild.channels.get(element.id).delete()
            });
        }
    }
}
module.exports.help={
    "name":"dc"
}