const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        this.emit('message', `${message} ${Date.not()}`)
    }
}

const logger = new Logger()

Logger.on('message', data =>{
    console.log(data)
})


logger.log('First')
logger.log('Second')
logger.log('Third')