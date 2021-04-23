const mongoose = require('mongoose');

//schema
const ProjectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
