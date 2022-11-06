let handler = async (m, { conn }) => {
let hyzer = 'https://api.zeeoneofc.xyz/api/anime/kakashi?apikey=EhrSrgvv'
    conn.sendButtonImg(m.chat, hyzer, teksfoto, wm2, 'NEXT', '.kakasih', m)
}
handler.help = ['kakasih']
handler.tags = ['anime']
handler.command = /^(kakasih)$/i

module.exports = handler
