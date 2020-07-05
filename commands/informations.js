const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setColor("#GREEN")
        .setTitle("Server Informations")
        .setDescription("Informations about this Server!")
        .setThumbnail("https://imgur.com/a/UGC6ZCS")
        .addField("Joined at:", message.member.joinedAt )
        .addField("User Count", message.guild.memberCount)

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "si",
    description: "Get the Server Informations",
    category: "Information"
}