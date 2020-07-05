const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    // !coin (Bot should say who wins!)

    var options = ["head", "number"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0].toUpperCase() == "HEAD") {

        if (result == "number") {

            return message.channel.send(`Ik heb ${result}, Ik win`);

        }else if (result == "head") {

            return message.channel.send(`Ik heb ${result}, Jij wint`);

        }
    }

}

module.exports.help = {
    name: "coin",
    description: "Throw a coin! - Not working at the moment!",
    category: "Fun"
}