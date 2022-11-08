let handler = async (m, { conn }) => {
let hyzer = 'https://api.zeeoneofc.xyz/api/nsfw/jahy?apikey=EhrSrgvv'
    conn.sendButtonImg(m.chat, hyzer, teksfoto, wm, 'NEXT', '.jahy', m)
}
handler.help = ['jahy']
handler.tags = ['anime']
handler.command = /^(jahy)$/i


export default handler
