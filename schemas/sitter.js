const {Schema} = require('mongoose');

const Sitter =  {
  sitter_id:  {
    type: Schema.Types.ObjectId,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}

module.exports = new Schema(Sitter);