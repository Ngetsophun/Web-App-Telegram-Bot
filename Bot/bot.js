const { Telegraf } = require("telegraf");
const TOKEN = "7549799069:AAFzhieVx_U_vgmCeDGxffGzzhZAFl_GrqQ";
const bot = new Telegraf(TOKEN);

const web_link = "https://rad-lebkuchen-893614.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();