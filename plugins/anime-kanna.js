import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/kanna?apikey=f52719f8e573fef99020268f'
	conn.sendButton(m.chat, 'Wangy wangy (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(kanna)$/i
handler.tags = ['anime']
handler.help = ['kanna']

export default handler
