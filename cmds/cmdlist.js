module.exports.run = async (bot,message,args)=>{
  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL
      },
      title: "Commands available",
      description: "List of available commands that you can use, got an error or want to report? check github link below",
      fields: [{
          name: ":small_red_triangle: **cc/dc [args here]**",
          value: "Create Channel and Delete channel module \n ``[argshere]`` Space separated channels mentions(for dc), and space separated channels name(for cc)\n ``[argshere]`` limit: 5\n eg: `g.dc #here-we-go #off-topic #support-me`"
        },
        {
            name: ":small_red_triangle: **cvc/dvc [args here]**",
            value: "Create voice channel and Delete voice channel module \n ``[argshere]`` Comma ( , ) separated vc name\n ``[argshere]`` limit: 5\n eg: `g.cvc/dvc chill zone,gen vc`"
        },
        {
            name: ":small_red_triangle: **cr/dr [args here]**",
            value: "Create roles and Delete roles module \n ``[argshere]`` Comman ( , ) separated roles name\n ``[argshere]`` limit: 5\n eg: `g.cr/dr admin, new user`"
        },
        {
            name: ":small_red_triangle: **ccat/dcat [args here]**",
            value: "Create categories and Delete categories module \n ``[argshere]`` Comma ( , ) separated categories name\n ``[argshere]`` limit: 5\n eg: `g.ccat/dcat read me, verify here`"
        },
        {
          name: ":information_source: **Github**",
          value: "[SuperFastServerAssitant](https://github.com/charfweh/superfastserverassistant)"
        }

      ],
      timestamp: new Date(),
      footer: {
        icon_url: bot.user.avatarURL,
        text: bot.user.username
      }
    }
  });
}
module.exports.help={
    "name":"cmd"
}
