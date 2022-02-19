
const Telegraf = require('telegraf').Telegraf;
const bot = new Telegraf('5060672684:AAGMSnOk3R3E56SB7437-x0BkpSVRJUnTpQ');
const axios = require('axios')
const fs = require('fs')

bot.command('start', ctx => {
    fact = fs.readFileSync('funfacts.txt', 'utf8', function(err,data) {
        return(data.split("\n"))
    })
    facts = fact.split("\n")
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'CAT BOT REEE', {
    })
    bot.telegram.sendMessage(ctx.chat.id, 'CAT?', requestPicture);
    //method that displays the inline keyboard buttons 
    bot.hears('CAT', ctx => {
        console.log(ctx.from)
        const result = Math.floor(Math.random()*(5 - 0) + 0)
        bot.telegram.sendPhoto(ctx.chat.id, {
            source: `res/cat${result}.jpg`
        })
        bot.telegram.sendMessage(ctx.chat.id, `Did you know? ${facts[result]}`, {})
    })
})

//constructor for providing phone number to the bot
const requestPicture = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "CAT",
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};

//method to start get the script to pulling updates for telegram 
bot.launch();
