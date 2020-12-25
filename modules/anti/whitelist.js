const Discord = require('discord.js')
module.exports.run = async (client, msg, args) => {
  
  let embed = new Discord.RichEmbed()
  .addField("`Succesful`", "Added user to whitelist members.")
 .setAuthor(msg.author.username, msg.author.avatarURL)
 .setColor('#66ff66')
  let embed2 = new Discord.RichEmbed()
.addField("`Succesful`", "User removed from whitelisted members.")
 .setAuthor(msg.author.username, msg.author.avatarURL)
 .setColor('#ff3300')

    if(msg.guild.ownerID !== msg.author.id) return msg.channel.send('Only the server owner may use this command.')

    let user = msg.mentions.users.first() 
    if (!user) return msg.reply('you forgot to mention a user to trust.')

    if(client.antinuke.get(msg.guild.id, "trusted").includes(user.id)) {
       client.antinuke.delete(msg.guild.id, `trusted.${client.antinuke.get(msg.guild.id, "trusted").findIndex(obj => obj === user.id)}`) 
        return msg.channel.send(embed2) 
    }

    msg.channel.send(embed)
    client.antinuke.push(msg.guild.id, user.id, "trusted")
}