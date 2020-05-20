module.exports.run = async (bot,message,args)=>{
    await message.channel.send("You've got a dm")
    await message.author.send("https://discord.com/api/oauth2/authorize?client_id=712589018532937738&permissions=8&scope=bot")
}
module.exports.help={
    "name":"i"
}