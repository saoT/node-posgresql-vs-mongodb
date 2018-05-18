const {Schema} = require('mongoose');

const Pet = {
  pet_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name : {
    type: String,
    required: true
  },
  owner_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Owner'
  }
}

module.exports = new Schema(Pet);