const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "728340227948806214";

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You cannot use this! If you want to close write: I don't need help!");

    if (message.channel.parentID == categoryID) {
        message.channel.delete();

        // Create embed.
        var embedCreateTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("The ticket is marked as **FINISHED**!")
            .setFooter("Ticket closed");

        // Channel vor logging
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log");
        if (!ticketChannel) return message.reply("Channel doesn't exist");

        ticketChannel.send(embedCreateTicket);
    } else {

        message.channel.send("Use this command on a ticket");

    }

}

module.exports.help = {
    name: "close",
    description: "Close the ticket",
    category: "Staff Commands"
}