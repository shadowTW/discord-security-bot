const Discord = require('discord.js')
module.exports.run = async (client, msg, args) => {
let embed = new Discord.RichEmbed()
.addField("`Disable`", "Now everyone with manage server permission will be able to add bots to this guild.")
 .setAuthor(msg.author.username, msg.author.avatarURL)
 .setColor('#ff3300')
let embed2 = new Discord.RichEmbed()
.addField("`Enable`", "Only whitelisted members and the server owner will be able to add bots to this guild.")
 .setAuthor(msg.author.username, msg.author.avatarURL)
 .setColor('#66ff66')
    if(msg.guild.ownerID !== msg.author.id) {
        if (!client.antinuke.get(msg.guild.id, "trusted").includes(msg.author.id)) return msg.reply('Only the server owner or whitelisted users may use this command.')
      }
    

    if(client.antiraid.get(msg.guild.id, "botsystem")) {
       client.antiraid.set(msg.guild.id, false, "botsystem") 
        return msg.channel.send(embed)
    }

    msg.channel.send(embed2)
    client.antiraid.set(msg.guild.id, true, "botsystem")
}