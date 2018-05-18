const {Schema} = require('mongoose');

const Debit = {
  debit_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  card_number: {
    type: String,
    required: true,
    unique: true
  },
  crypto: {
    type: String,
    required: true
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Owner'
  }
}

module.exports = new Schema(Debit);