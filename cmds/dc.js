module.exports.run = async (bot,message,args)=>{
    if(!args) return message.channel.send("Specify args")
    if(args){
        if(args.length > 5) return message.channel.send("Arguments should be less than 5")
        args.forEach(a=>{
            let dc = message.guild.channels.filter(c=>a.includes(c.name))
            if(dc.array().length == 0) return message.channel.send("No such channel/channels")

            dc.forEach(dc=>{
                console.log(dc.name)
                try{
                    message.guild.channels.get(dc.id).delete().then(message.channel.send("Channel deleted"))
                }catch(err){
                    message.channel.send("Channel doesnt exist")
                }
            })
            // if(dc) dc.delete().then(message.channel.send("Channel deleted!"))
            // else message.channel.send("Channel not found")
        })
    }
}
module.exports.help={
    "name":"dc"
}