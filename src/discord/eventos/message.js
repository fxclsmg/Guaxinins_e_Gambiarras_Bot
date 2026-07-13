const bot = require("../client");
const commandHandler = require("../commandHandler");

bot.on("message", msg => {
    commandHandler(msg);
});
