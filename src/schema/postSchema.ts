const mongoose = require('mongoose');

const postSchema = {
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  image_url:{ type: String },
  description: {
    type: String,
    trim: true,
  },
  rich_description: {
    type: String,
    trim: true,
  },
  image_text: {
    type: String,
    trim: true,
  },
  reactions:[{type: String,}],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
};

export default postSchema;