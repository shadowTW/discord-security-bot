const discord = require('discord.js') 
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("You don't have acces to run this command");

    
    
message.guild.fetchBans().then(bans => {
      
        
          message.channel.send(`Are you sure to unban **${bans.size}** banned members on this server?`)
        
      })
      
  

        message.react('✅').then(r => {
                            message.react('⛔');
                    });
    
                    // First argument is a filter function
                    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '✅' || reaction.emoji.name == '⛔'),
                            { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '✅') {
                                           message.guild.fetchBans().then(bans => {
      bans.forEach(banInfo => {
        message.guild.members.unban(banInfo.user);
      })
    });
              
                                    }
                                    else
                                            message.reply('The command was canceled');
                            }).catch(() => {
                                    message.reply("The command was canceled because you don't reacted");
                            });  
    
 
  }
 