const {Schema} = require('mongoose');

const User =  {
  user_id:  {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  credentials: {
    type: String,
    unique: true,
    required: true
  }
}

module.exports = new Schema(User);