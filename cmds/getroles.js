const Discord = require('../../backup/node_modules/discord.js')
module.exports.run = async (bot,message,args)=>{
    message.guild.roles.forEach((item, i) => {
      message.channel.send(`Name **${item.name}** Editable **${item.editable}**`)
    });
    // const embed = new Discord.RichEmbed()
    // let roles = []
    // embed.setTitle("Role info")
    // embed.setThumbnail(message.author.avatarURL)
    // embed.addField("Role",roles.toString())
    // embed.setTimestamp();
    // message.channel.send(embed)

}
module.exports.help = {
    name:"getroles"
}
