const discord = require('../backup/node_modules/discord.js')
const bot = new discord.Client({disableEveryone:false});
const configfile = require('./configs.json')
const prefix = configfile.prefix;
const fs = require('fs');
//reading all necessary files
bot.commands = new discord.Collection();
fs.readdir("./cmds/",(err,file)=>{
    if(err) console.log("Something's wrong");
    let jsfiles = file.filter(f=>f.split(".").pop()==='js');
    if(jsfiles.length <= 0) console.log("No commands to load");
    console.log("Loading files...");
    jsfiles.forEach((f,i)=>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}: ${f} loaded`);
        bot.commands.set(props.help.name,props);
    })
});

bot.on('ready', function(){
    console.log(`Logged in as ${bot.user.tag}`);
    bot.user.setActivity(`Creating guilds with ${prefix}`);
    
});

bot.on('guildCreate',function(guild){
    console.log(`joined guild ${guild.name} at ${guild.joinedAt}`);
    guild.systemChannel.send("Thanks for letting me in, you can try me out using ``g!help``")
});
bot.on('message', async message=>{
    if(message.author == bot.user) return;
   let args  = message.content.slice(prefix.length).trim().split(/ +/g);
   let cmds  = args.shift().toLowerCase();
   let cmdrun = bot.commands.get(cmds);
   if(message.content.startsWith(prefix) && (!bot.commands.has(cmds))) return message.channel.send("No such command exists, try ``g.help`` to get available commands");
   else if(message.content.startsWith(prefix) && bot.commands.has(cmds)){
        try{
            if(cmdrun.help.name == 'help'){
                cmdrun.run(bot,message,args);
            }
            else{
                if(message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
                        cmdrun.run(bot,message,args);
                    }
                    else{
                        message.channel.send("You do not have permission to run this command")
                    }
                }
        }catch(e){
            console.log(e);
            message.channel.send("There was an error running that command");
            }
    }
});
bot.login(configfile.token);