
import mongoose, { Document, Schema } from 'mongoose';

export interface TypeScriptPage extends Document {
  title: string;
  content?: string;
  slug: string;
  author: string;
  userAccess: string;
  createdAt: Date;
}

const PageSchema = new Schema<TypeScriptPage>({
  title: String,
  slug: { type: String, unique: true },
  content: String,
  author: String ,
  userAccess: { type: String, enum: ['admin', 'viewer'], default: 'viewer' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Page || mongoose.model<TypeScriptPage>('Page', PageSchema);
