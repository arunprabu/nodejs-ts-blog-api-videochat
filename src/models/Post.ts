import mongoose, { Document } from "mongoose";

// custom datatype
export interface PostInterface extends Document {
  title: string;
  content: string;
}

const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

export const Post = mongoose.model<PostInterface>("Post", postSchema);