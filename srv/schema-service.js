const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {
  const messaging = await cds.connect.to('messaging')

  this.on('sendMessage', async req => {
      console.log('SendMessage')

      const topic = 'demo/auxiliary'
      const message = { 'ID' : req.data.ID }
      
      messaging.emit(topic, message)
      return 'Message successfully sent'
    })
})
