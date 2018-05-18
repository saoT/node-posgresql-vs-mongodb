const {Schema} = require('mongoose');

const Review = {
  review_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  content: String,
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
  sitter_id: {
    type: Schema.Types.ObjectId,
    ref: 'Sitter'
  },
  pet_id: {
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  }
}

module.exports = new Schema(Review);