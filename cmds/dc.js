module.exports.run = async (bot,message,args)=>{
    if(!args) return message.channel.send("Specify args")
    if(args){
        if(args.length > 5) return message.channel.send("Channel arguments should be less than 5")
        args.forEach(a=>{
            let dc = message.guild.channels.filter(c=>a.includes(c.name))
            if(dc.array().length == 0) return message.channel.send(`No such channel/channels`)

            dc.forEach(dc=>{
                try{
                    message.guild.channels.get(dc.id).delete().then(message.channel.send(`Channel with name **${dc.name}** deleted`))
                }catch(err){
                    message.channel.send("Sorry, we ran into error")
                }
            })
        })
    }
}
module.exports.help={
    "name":"dc"
}