module.exports.run = async (bot,message,args)=>{
    if(!args[0]) return message.channel.send("Specify args")
    if(args.length > 5) return message.channel.send("Channel arguments should be less than 5").then(msg=>msg.delete(2000))
    if(args.length <= 5){
        let uniarr = []
        for(i = 0 ; i < args.length; i++){
            if(uniarr.indexOf(args[i]) === -1){
                uniarr.push(args[i])
            }
        }
        console.log(uniarr)
        uniarr.forEach(c=>{
            message.guild.createChannel(c,'text').then(message.channel.send("Channel created!"))
        })
        
    }
    
}
module.exports.help = {
    name:"cc"
}