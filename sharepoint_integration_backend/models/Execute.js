const mongoose = require('mongoose')

const ExecuteSchema = new mongoose.Schema({
  execute_response: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
})

module.exports = Execute = mongoose.model('execute', ExecuteSchema)
