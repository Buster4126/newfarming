const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const categoryID = "728340227948806214";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketExist = false;

    message.guild.channels.cache.forEach(channel => {

        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
            ticketExist = true;

            message.reply("You already created a ticket!");

            return;
        }
        
    });

    if(ticketExist) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hey " + message.author.username)
        .setFooter("Support channel created!");

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hey ${message.author.username}`)
                        .setDescription("Write here your question / problem");

                    settedParent.send(embedParent);

                }
            ).catch(err => {
                message.channel.send("Something went wrong! Please contact Jebsi / Buster4126");
            })
        }
    ).catch(err => {
        message.channel.send("Something went wrong! Please contact Jebsi / Buster4126");
    });

}

module.exports.help = {
    name: "ticket",
    description: "Opens a new ticket!",
    category: "General"
}