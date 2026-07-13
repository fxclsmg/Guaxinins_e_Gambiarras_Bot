const bot = require("./discord/client");
const config = require("./config");


require("./discord/eventos/ready");
require("./discord/eventos/message");


bot.login(config.token);
