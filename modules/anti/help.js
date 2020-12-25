const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
let embed = new Discord.RichEmbed()

        .setTitle('**Security Commands**')
        .addField("`/antibot`", "Allow only trusted people to add bots to the server")
        .addField("`/whitelist`", "Whitelist someone from getting punished by me")
        .addField("`/removeperms`", "Give everyone only read messages permission")
        .addField("`/adminrestore`", "Restore everyone's permissions after a possible nuke or using the command /removeperms")
        .addField("`/invite`", "Get an invite link for this bot")
        .addField("`/unbanall`", "Unban every banned user")
        .addField("`Infos`", "Anti-Webhook Spammer: on\nAnti-Spam/Deleteing channel: on\nAnti-Create/Delete Roles: on\nAnti-Ban Members: on\nAnti-Kick Members: on")
        .setFooter('')
         .setAuthor(msg.author.username, msg.author.avatarURL)
         .setColor('#00ace6')
        msg.channel.send(embed)

  

}
