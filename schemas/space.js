const {Schema} = require('mongoose');

const Space = {
  space_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  description: String,
  name: {
    type: String,
    required: true
  },
  sitter_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Sitter'
  }
}

module.exports = new Schema(Space);