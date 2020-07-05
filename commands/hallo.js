const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("Hallo!!");

}

module.exports.help = {
    name: "hallo",
    description: "Say Hello to the bot, maybe he answer back",
    category: "General"
}