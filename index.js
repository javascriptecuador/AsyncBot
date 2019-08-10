require('dotenv').config();

const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')

const markup = Extra
  .HTML()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Bienvenido'))
bot.help((ctx) => ctx.reply('Esta seccion esta en desarrollo...'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.command('github', (ctx) => ctx.reply('Esta es la cuenta de JavaScript Ecuador en Github https://github.com/javascriptecuador'))
// En esa función se debería usar RegExp para cuando alguien salude, y el bot pueda responder
bot.hears('Hola a todos', (ctx) => ctx.reply('Hola humano!'))
bot.on('new_chat_members', (ctx) => {
  let newUser = ctx.message.new_chat_members[0]
  return ctx.reply(`Bienvenido a la comunidad de JavaScript Ecuador <b>${newUser.first_name}</b> <b>${newUser.last_name || ''}</b>`, markup)
})
bot.launch()