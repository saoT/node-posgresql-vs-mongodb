const {Schema} = require('mongoose');

const Credit = {
  credit_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  iban: {
    type: String,
    required: true,
    unique: true
  },
  swift: {
    type: String,
    required: true
  },
  sitter_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Sitter'
  }
}

module.exports = new Schema(Credit);