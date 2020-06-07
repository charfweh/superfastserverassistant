module.exports.run = async (bot,message,args)=>{
    // if(!args) return message.channel.send("Specify args")
    if(args.length > 5) return message.channel.send("Channel mentions should be less than 5")
    if(args.length<=5){
      console.log(args)
      newarr = []
      args.forEach((item, i) => {
          newarr.push(item.replace(/\W/g,""))
      });
      console.log(newarr)
      newarr.forEach((item, i) => {
        let channel = message.guild.channels.find(c=>c.id == item)
        if(channel){
          channel.delete().then(message.channel.send(`Channel deleted successfully`))
        }
        else{
          message.channel.send(`Channel not found with name **${item}**`)
        }
      });

    }
}
module.exports.help={
    "name":"dc"
}


///backup
//   if(args.length > 5) return message.channel.send("Channel arguments should be less than 5")
//   let d_channel = args.map(role=>role.trim()).filter(s=>/\S/.test(s))
//   if(d_channel.length == 0) return message.channel.send("No arguments provided")
//   console.log(d_channel)
//   if(d_channel!=0){
//   for(i = 0 ; i < d_channel.length; i++){
//     try{
//       let chnl = message.guild.channels.find(rn => rn.name === d_channel[i] && rn.type == 'text')
//       if(!chnl) message.channel.send(`channel doesnt exists under name **${d_channel[i]}**`)
//       if(chnl){
//         await message.channel.send(`Deleting channel with name **${chnl.name}**`)
//         await chnl.delete().then(()=>{
//           message.channel.send("channel deleted successfully!")
//         }).catch(()=>{
//           message.channel.send("Couldnt delete channel, Mising permission")
//         })
//       }
//     } catch(err){
//       message.channel.send("Ran into an error")
//       console.log(err)
//     }
//   }
// }
