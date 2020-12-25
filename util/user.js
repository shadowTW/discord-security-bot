const Discord = require('discord.js');
module.exports = class user {
    static async setNukeUser(client, guild, action) {

        let logs = await guild.fetchAuditLogs()

        let actualLogs = logs.entries.filter(a => a.action === action)

     

          
           let e = actualLogs.array()


           if (e[0].executor.id === client.user.id) return;
           guild.members.get(e[0].executor.id).kick("Tried nuking the server")
      let embed = new Discord.RichEmbed()
     .addTitle("Nuking attempt")
     .addDescription(`${e[0].executor.username}#${e[0].executor.discriminator} just tried nuking.\nI kicked them.\nType **::adminrestore** to give everyone\'s permissions back.`)
    .setColor('#ff0000')
           client.users.get(guild.ownerID).send(embed)
           return;
 


        
    }
}
