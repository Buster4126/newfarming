const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var applyEmbed = new discord.MessageEmbed()
        .setColor("#0dd42b")
        .setTitle("Sollicitaties Informations")
        .setDescription("Informatie over het sollicitieren!")
        .setThumbnail('https://imgur.com/gkPKmrQ.png')
        .addFields(
            {name: "In dit kanaal kunt je sollicitieren", value: "#solliciteren📂"},
            {name: "***Technik Status***", value:"*Dicht*"},
            {name: "***Bouwer Status***", value: "*Open*"},
            {name: "Heb je hulp nodig of heb je nog meer vragen?", value: "Maak een ticket in dit kanaal #tickets🎫"}
        )

    return message.channel.send(applyEmbed);

}

module.exports.help = {
    name: "sollicitieren",
    description: " Krijg informatie over sollicitaties",
    category: "General"
}