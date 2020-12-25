const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**You dont have acces**");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("❌ `-` I can't find that user");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ `-` I can't mute that user");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("❌ `-` Please write the time, like /mute @shadow 1m [reason if you want]");

  await(tomute.addRole(muterole.id));
  message.reply(`muted <@${tomute.id}> for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> got unmuted!`);
  }, ms(mutetime));


//end of module
}
