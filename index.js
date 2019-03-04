const TelegramBot = require('node-telegram-bot-api')

const TOKEN  = "717477348:AAGVs7b9ra_m-E4cyluTmMgA-SGXUSz-noY"

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `hello from heroku, bot says: "hi, ${msg.from.first_name}`)
})



