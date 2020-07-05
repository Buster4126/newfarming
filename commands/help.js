const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {

    // try{

    //     var text = "**TEST BOT** \n\n **__Commands__** \n !hallo - Say to the Bot Hallo. \n !si - Get the Server informations.";

    //     message.author.send(text);

    //     message.reply("Check your Private messages");

    // }catch(error) {
    //     message.reply("Enable private messages!");
    // }

    var commandList = [];
    var prefix = botConfig.prefix;

    bot.commands.forEach(command => {

        var constructor = {

            name: command.help.name,
            description: command.help.description,
            category: command.help.category
        }

        commandList.push(constructor);
        
    });

    var response = "**Bot Commands**\n\n";
    var general = "**__General__**\n";
    var info = "**\n__Information__**\n";
    var staff = "**\n__Staff Commands__**\n";
    var fun = "**\n__Fun Commands__**\n";

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if(command["category"] == "General"){

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "Information"){

            info += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "Staff Commands"){

            staff += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "Fun Commands"){

            fun += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }
        
    }

    response += general;
    response += info;
    response += staff;

    message.author.send(response).then(() => {
        message.channel.send("I've send you all commands! Look thru your privat chats  :mailbox_with_mail:");
    }).catch(() => {
        message.channel.send(":x: Please enable privat chats! :x:");
    })

}

module.exports.help = {
    name: "help",
    description: "Shows all commands from the server!",
    category: "General"
}