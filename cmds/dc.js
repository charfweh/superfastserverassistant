module.exports.run = async (bot,message,args)=>{
    if(!args) return message.channel.send("Specify args")
    if(args){
        if(args.length > 5) return message.channel.send("Channel arguments should be less than 5")
        args[0] = args[0].replace("dc","")
        let d_channel = args.map(role=>role.trim())
        console.log(d_channel)
        for(i = 0 ; i < d_channel.length; i++){
          try{
            let chnl = message.guild.channels.find(rn => rn.name === d_channel[i] && rn.type == 'text')
            if(!chnl) message.channel.send(`channel doesnt exists under name **${d_channel[i]}**`)
            if(chnl){
              await message.channel.send(`Deleting channel with name **${chnl.name}**`)
              await chnl.delete().then(()=>{
                message.channel.send("channel deleted successfully!")
              }).catch(()=>{
                message.channel.send("Couldnt delete channel, Mising permission")
              })
            }
          } catch(err){
            message.channel.send("Ran into an error, please contact developer, error logs will be sent to developer")
            console.log(err)
          }
        }
    }
}
module.exports.help={
    "name":"dc"
}
