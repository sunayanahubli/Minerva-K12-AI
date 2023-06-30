const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Topic = mongoose.model('topic', TopicSchema);