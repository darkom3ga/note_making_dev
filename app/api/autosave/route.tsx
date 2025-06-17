import dbConnect from '@/lib/dbConnect'
import Page from '@/dbmodels/page' 
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { slug, content, title } = req.body;

    if (!slug || !content) {
      return res.status(400).json({ error: 'Missing slug or content' });
    }

    const updated = await Page.findOneAndUpdate(
      { slug },
      { $set: { content, title } },
      { new: true, upsert: true } 
    );

    return res.status(200).json({ success: true, data: updated });
  } catch (err) {
    console.error('[SAVE ERROR]', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
