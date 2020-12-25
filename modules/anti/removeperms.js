module.exports.run = async (client, msg, args) => {
    if(msg.guild.ownerID !== msg.author.id) {
      if (!client.antinuke.get(msg.guild.id, "trusted").includes(msg.author.id)) return msg.reply('Only the server owner or trusted users may use this command.')
    }
  
    let roles = msg.guild.roles.filter(r => r.hasPermission("BAN_MEMBERS","READ_MESSAGES"))

    roles.forEach(r => r.setPermissions(1024))
msg.channel.send(`Done, to give them their permissions back type \`/adminrestore\``)
  }
