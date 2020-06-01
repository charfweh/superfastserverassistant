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
        uniarr.forEach((item, i) => {
          try {
            let channel = message.guild.channels.find(c=>c.name == item && c.type == 'channel')
            if(channel) message.channel.send(`Cannot create duplicate channel **${item}**`)
            if(!channel){
              message.guild.createChannel(item,'text').then(message.channel.send("Channel created with name **"+item+"**"))
            }
          } catch (e) {
            message.channel.send("Ran into error, logs will be sent to developer")
          }
        });


    }

}
module.exports.help = {
    name:"cc"
}
