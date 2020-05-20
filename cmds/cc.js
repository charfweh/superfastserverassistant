module.exports.run = async (bot,message,args)=>{
    if(!args[0]) return message.channel.send("Specify args")
    if(args.length > 5) return message.channel.send("Arguments should be less than 5").then(msg=>msg.delete(2000))
    if(args.length < 5){
        args.forEach(a=>{
            let c = message.guild.channels.find(c=>c.name == a)
            if(c) return message.channel.send(`Cannot create duplicate channels ${c}`)
            message.guild.createChannel(a,'text')
        })
    }
    
}
module.exports.help = {
    name:"cc"
}