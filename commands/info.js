const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("Informations!!");

}

module.exports.help = {
    name: "info",
    description: "Let the Bot say: Informations!!",
    category: "General"
}