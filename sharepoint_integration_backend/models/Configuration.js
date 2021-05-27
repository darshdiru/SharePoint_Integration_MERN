const mongoose = require('mongoose')

const ConfigurationSchema = new mongoose.Schema({
  connection_name: {
    type: String,
    required: true,
  },
  client_id: {
    type: String,
    required: true,
  },
  client_secret: {
    type: String,
    required: true,
  },
  tenant: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
})

module.exports = Configuration = mongoose.model('connection', ConfigurationSchema)
