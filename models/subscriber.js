const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    reqired: true
  },
  subscribedToChannel: {
    type: String,
    reqired: true
  },
  subscribeDate: {
    type: Date,
    reqired: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)