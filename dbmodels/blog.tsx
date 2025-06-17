
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    contenttype: String, 
    title: String,
    slug: {type: String , unique: true }, 
    description: String,
    content: String,
    featuredimage: String,
    author: String,
    userAccess: { type: String, enum: ['admin', 'viewer'], default: 'viewer' },
    createdAt: { type: Date, default: Date.now }

  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
