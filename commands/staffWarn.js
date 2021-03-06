const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./staffwarn.json", "utf8"));

module.exports.run = async(bot, message, args) => {

    // !warn @playername [reason].

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, you cannot do this");

    if (!args[0]) return message.reply("Please write an unsername!");

    if (!args[1]) return message.reply("Please write a reason");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("You don't have the perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Cannot find that user!");

    if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, you cannot warn this user!");

    if (!warns[warnUser.id]) warns [warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter(message.member.displayname, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Banned:** ${warnUser} (${warnUser.id})
        **Warned from:** ${message.author}
        **Reason: ** ${reason}`)
        .addField("Warns:", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("731875273041248286");

    if (!channel) return("Doesn't exist");

    channel.send(embed);


}

module.exports.help = {
    name: "staffwarn"
}