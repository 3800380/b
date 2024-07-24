const bot = require(__dirname + '/lib/Byte')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Just a second, BYTE-MD is starting ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
