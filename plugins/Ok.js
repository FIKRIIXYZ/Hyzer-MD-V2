let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://file.io/VqIgpTNV8eys', m, { packname: "sticker by", author: "Fikrii" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
