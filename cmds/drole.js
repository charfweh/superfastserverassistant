module.exports.run = async (bot,message,args)=>{
    if(!args) return message.channel.send("Specify args")
    if(args){
        if(args.length > 5) return message.channel.send("Channel arguments should be less than 5")
        args[0] = args[0].replace("dr","")
        let f_role = args.map(role=>role.trim())
        console.log(f_role)
        for(i = 0 ; i < f_role.length; i++){
          try{
            let role = message.guild.roles.find(rn => rn.name === f_role[i])
            if(!role) message.channel.send(`Role doesnt exists under name **${f_role[i]}**`)
            if(role){
              await message.channel.send(`Deleting role with name **${role.name}**`)
              await role.delete().then(()=>{
                message.channel.send("Role deleted successfully")
              }).catch(()=>{
                message.channel.send("Couldnt delete role, Mising permission")
              })
            }
          } catch(err){
            message.channel.send("Ran into an error")
            console.error();
          }
        }
    }
}
module.exports.help={
    "name":"dr"
}
