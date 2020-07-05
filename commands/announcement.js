const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !announcement title | bericht | kleur | kanaal

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You cannot use this");

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Use")
            .setColor("GREEN")
            .setDescription(`Make an announcement. Use this \n !announcement titel ${seperator} bericht ${seperator} kleur ${seperator} kanaal`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#eeeeee";
    if (argsList[3] === undefined) argsList[3] = "general";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || ("There is no announce"),
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var announceEmbed = new discord.MessageEmbed()
        .setTitle("Announcement")
        .setColor(options.kleur)
        .setDescription(`Announcement from: ${message.author} \n\n ${options.titel} \n\n ${options.bericht}`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if(!channel) return message.reply("This channel doesn't exist");

    channel.send(announceEmbed);

}

module.exports.help = {
    name: "announcement",
    description: "Make a server announcement",
    category: "Staff Commands"
}