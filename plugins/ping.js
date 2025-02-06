const { bot } = require('../lib/')

bot(
  {
    pattern: 'ping ?(.*)',
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    await message.send('```AREE RUK BHAI!```')
    const end = new Date().getTime()
    return await message.send('*YEE LEE LEH !*\n ```' + (end - start) + '``` *ms*')
  }
)
