const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('text', ctx => {
  console.log(`${ctx.from.first_name} said ${ctx.message.text}`);
  ctx.reply(`You told me ${ctx.message.text}`);
});

bot.launch();
