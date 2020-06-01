module.exports.run = async (bot,message,args)=>{
    // if(!args[1]) return message.channel.send("Specify category arguments")

    if(args.length > 5) return message.channel.send("categores arguments should be less than 5").then(msg=>msg.delete(2000))
    if(args.length <= 5){
      console.log("Args"+args)
        args[0]= args[0].replace("ccat","")
        let uniarr = []
        let f_arr = args.map(item=>item.trim()).filter(s=>/\S/.test(s))
        console.log("whitespace arr"+f_arr)
        for(i = 0 ; i < f_arr.length; i++){
            if(uniarr.indexOf(f_arr[i]) === -1){
                uniarr.push(f_arr[i])
            }
        }
        console.log(uniarr)
        try {
          await uniarr.forEach(async (item, i) => {
              let cat = message.guild.channels.find(r=>r.name == item && r.type == 'category')
              if(cat){
                message.channel.send("Cannot create duplicate category, **"+cat+"** already exists")
              }
              if(!cat){
                await message.guild.createChannel(item,'category')
                await message.channel.send("Category created!")
            }
          });
        } catch (e) {
            message.channel.send("Ran into error, error logs will be sent to developer")
            console.log(e)
        }


    }

}
module.exports.help = {
    name:"ccat"
}
