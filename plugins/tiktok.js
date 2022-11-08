let fetch = require('node-fetch')
let handler = async (m, { itsu, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.zeeoneofc.xyz/api/downloader/tiktok?url=https://t.tiktok.com/i18n/share/video/7050032845158403354/?region=ID&mid=7028787667471010587&u_code=dkck2mgka0lmkh&preview_pb=0&language=id&_d=dm347b2b5m8daf&share_item_id=7050032845158403354&source=h5_t&timestamp=1641508306&user_id=7003032823783277595&sec_user_id=MS4wLjABAAAAQVcSMWZtoLQ3qqF4wHQOtvq8VoOQGmOor9X-gZgltrkCNbjbmOS-fjVR1gX0Dep9&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7038903817816540955&share_link_id=0a8b0672-dcb7-494f-8659-102e11d39d1f&share_app_id=1180&apikey=EhrSrgvv&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { description, author, statistic, link } = json.result
await itsu.sendFile(m.chat, link, 'tt.mp4', `
▶ ${statistic.playCount} Views
❤ ${statistic.diggCount} Likes
🔁 ${statistic.shareCount} Shares
💬 ${statistic.commentCount} Comments
- *By:* ${author.nickname} (${author.username})
- *Desc:*
${description}
`.trim(), m)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler
