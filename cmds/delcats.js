module.exports.run = async (bot,message,args)=>{
    if(!args) return message.channel.send("Specify args")
    if(args){
        if(args.length > 5) return message.channel.send("Channel arguments should be less than 5")
        args[0] = args[0].replace("dcat","")
        let f_role = args.map(role=>role.trim())
        console.log(f_role)
        for(i = 0 ; i < f_role.length; i++){
          try{
            let cat = message.guild.channels.find(rn => rn.name === f_role[i] && rn.type == 'category')
            if(!cat) message.channel.send(`category doesnt exists under name **${f_role[i]}**`)
            if(cat){
              await message.channel.send(`Deleting category with name **${cat.name}**`)
              await cat.delete().then(()=>{
                message.channel.send("category deleted successfully")
              }).catch(()=>{
                message.channel.send("Couldnt delete category, Mising permission")
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
    "name":"dcat"
}
