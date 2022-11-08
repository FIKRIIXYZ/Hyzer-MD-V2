let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'url/link nya mana?'
  let res = await fetch(`https://api.lolhuman.xyz/api/shortlink2?apikey=f52719f8e573fef99020268f&url=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Link Invalid!\nPeriksa url anda'
}
handler.help = ['shorturl'].map(v => v + ' <url>')
handler.tags = ['shortlink']
handler.command = /^shorturl$/i

module.exports = handler
