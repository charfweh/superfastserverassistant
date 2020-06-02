module.exports.run = async (bot,message,args)=>{
    if(!args) return message.channel.send("Specify args")
    if(args){
        if(args.length > 5) return message.channel.send("Channel arguments should be less than 5")
        args[0] = args[0].replace("dvc","")
        let f_vc = args.map(vc=>vc.trim())
        console.log(f_vc)
        for(i = 0 ; i < f_vc.length; i++){
          try{
            let vc = message.guild.channels.find(rn => rn.name === f_vc[i] && rn.type == 'voice')
            if(!vc) message.channel.send(`voice channel doesnt exists under name **${f_vc[i]}**`)
            if(vc){
              await message.channel.send(`Deleting voice channel with name **${vc.name}**`)
              await vc.delete().then(()=>{
                message.channel.send("voice channel deleted successfully")
              }).catch(()=>{
                message.channel.send("Couldnt delete voice channel, Mising permission")
              })
            }
          } catch(err){
            message.channel.send("Ran into an error")
            console.log(err)
          }
        }
    }
}
module.exports.help={
    "name":"dvc"
}
