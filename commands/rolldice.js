const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName);
    const rollDice = () => Math.floor(Math.random() * 6) + 1;

    if(isValidCommand(message, "rolldice")) {
        message.reply("rolled a " + rollDice());
    }

}

module.exports.help = {
    name: "rolldice",
    description: "Let the Bot say: Informations!!",
    category: "General"
}