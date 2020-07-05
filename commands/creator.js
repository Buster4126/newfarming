const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

         try{

         var text = "**TEST BOT** \n\n **__Creator__** \n Jebsi \n **DISCORD** \n https://discord.gg/kd5hQSB";

         message.author.send(text);

         message.reply("I've send you all commands! Look thru your privat chats  :mailbox_with_mail:");

     }catch(error) {
         message.reply("Enable private messages!");
     }

}

module.exports.help = {
    name: "creator-info",
    description: "Get informations about the creator",
    category: "General"
}