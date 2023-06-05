

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    commenterName: String,
    comment: String,
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
