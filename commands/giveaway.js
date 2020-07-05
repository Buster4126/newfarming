const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !giveaway aantalSpeler tijd berichtjeTekst

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, you cannot use this command!");

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    if (!winnerCount) return message.reply("Please write how many users can win!");
    if (!time) return message.reply("Please write how long this Giveaway should less!");
    if (!item) return message.reply("Please write what you can win!");

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.MessageEmbed()
        .setTitle("🎉🎉 **Giveaway** 🎉🎉")
        .setFooter(`Ends on ${dateEnd}`)
        .setDescription(`**Price:** ${item}`);

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.array();

        for (let i = 0; i < peopleReacted.length; i++) {
            
            if(peopleReacted[i].id == bot.user.id){
                peopleReacted.splice(i,1);
                continue;
            }
            
        }

        if(peopleReacted.length == 0){
            return message.channel.send("No one won, so the bot won! :D");
        }

        if(peopleReacted < winnerCount) {
            return message.channel.send("There wasn't enough people who joined the giveaway! The bot wins!");
        }

        for (let y = 0; y < winnerCount.length; y++) {
           
            inList =false;

            random = Math.floor(Math.random() * peopleReacted.length)

            for (let o = 0; o < winners.length; o++) {
                
                if(winners[o] == peopleReacted[random]){
                    inList = true;
                    y--;
                    break;
                }
                
            }
            

            if(!inList){
                winners.push(peopleReacted[random]);
            }
        }


        for (let y = 0; y < winners.length; y++) {

            message.channel.send("Congratulation: " + winners[y].username + `! You won  **${item}**!`);
            
        }

    }, time * 1000)

}

module.exports.help = {
    name: "giveaway",
    description: "Start a giveaway",
    category: "Staff Commands"
}