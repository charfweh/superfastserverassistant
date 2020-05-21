module.exports.run = async (bot,message,args)=>{
    if(!args) return message.channel.send("No arguments provided")
    if(args){
        if(args.length > 5) return message.channel.send("Roles argument should be less than 5")
        args.forEach(r=>{
            let roles = message.guild.roles.find(role=>role.name == r)
            if(roles) return message.channel.send(`Cannot create duplicate role, **${r}** role already exists`)
            message.guild.createRole({
                name: r,
                color:"RANDOM",
                mentionable: true
                }).then(message.channel.send(`Role created **${r}**`))
        })
    }
}
module.exports.help={
    "name":"cr"
}