const TelegramBot = require('node-telegram-bot-api')

const TOKEN  = "717477348:AAGVs7b9ra_m-E4cyluTmMgA-SGXUSz-noY"

const bot = new TelegramBot(TOKEN, {polling: true})

// bot.on('message', msg => {
//     bot.sendMessage(msg.chat.id, `hello from heroku, bot says: "hi, ${msg.from.first_name}`)
// })

bot.onText(echo, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
})

// Простая команда без параметров.
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    var photo = 'cats.png';
    bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
})