let handler = m => m.reply('*Hola๐que tal soy ๐๐๐-๐๐๐๐๐๐ ten las iniciales* ,    *แดฎแดท๏ธฑ*')

handler.customPrefix = /^(nick0)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
