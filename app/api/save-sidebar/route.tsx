// app/api/save-sidebar/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const { width } = await req.json(); 

  const filePath = path.join(process.cwd(), '/app/theme/config.css');
  let css = fs.readFileSync(filePath, 'utf8');

  const tokens = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  tokens.width.sidebar = width;

  fs.writeFileSync(filePath, JSON.stringify(tokens, null, 2));

  return NextResponse.json({ success: true });
}
