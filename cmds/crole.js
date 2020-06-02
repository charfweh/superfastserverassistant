module.exports.run = async (bot,message,args)=>{
    if(!args[0]) return message.channel.send("Specify args")

    if(args.length > 5) return message.channel.send("Roles arguments should be less than 5").then(msg=>msg.delete(2000))
    if(args.length <= 5){
      console.log("Args"+args)
        args[0]= args[0].replace("cr","")
        let uniarr = []
        let f_arr = args.map(item=>item.trim())
        console.log("whitespace arr"+f_arr)
        for(i = 0 ; i < f_arr.length; i++){
            if(uniarr.indexOf(f_arr[i]) === -1){
                uniarr.push(f_arr[i])
            }
        }
        console.log(uniarr)
        try {
          await uniarr.forEach((item, i) => {
              let role = message.guild.roles.find(r=>r.name == item)
              if(role){
                message.channel.send("Cannot create duplicate roles, **"+role+"** already exists")
              }
              if(!role){
                message.guild.createRole({
                name:item,
                color:"RANDOM"
              }).then(message.channel.send(`Role created with name **${item}**`))
            }
          });
        } catch (e) {
            message.channel.send("Ran into an error")
            console.log(e)
        }


    }

}
module.exports.help = {
    name:"cr"
}
