module.exports.run = async (bot,message,args)=>{
    // if(!args[1]) return message.channel.send("Specify category arguments")

    if(args.length > 5) return message.channel.send("voice channel arguments should be less than 5").then(msg=>msg.delete(2000))
    if(args.length <= 5){
      console.log("voice channel"+args)
        args[0]= args[0].replace("cvc","")
        console.log(`vcargs ${args}`)
        let uniarr = []
        let f_arr = args.map(item=>item.trim()).filter(s=>/\S/.test(s))
        console.log("arr "+f_arr.length)
        if(f_arr.length == 0) return message.channel.send("No voice channels arguments provided")
        if(f_arr.length!=0){
          console.log(`carr ${f_arr}`)
          for(i = 0 ; i < f_arr.length; i++){
              if(uniarr.indexOf(f_arr[i]) === -1){
                  uniarr.push(f_arr[i])
              }
          }
          console.log(`something ${uniarr}`)
          try {
            await uniarr.forEach((item, i) => {
                let cat = message.guild.channels.find(r=>r.name == item && r.type == 'voice')
                if(cat){
                  message.channel.send("Cannot create duplicate voice channel, **"+cat+"** already exists")
                }
                if(!cat){
                   message.guild.createChannel(item,'voice').then(message.channel.send("voice channel created"))
              }
            });
          } catch (e) {
              message.channel.send("Ran into an error")
              console.log(e)
          }
      }

    }

}
module.exports.help = {
    name:"cvc"
}
