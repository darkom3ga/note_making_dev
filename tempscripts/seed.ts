// scripts/seedPages.ts
import mongoose from 'mongoose';

import Page from '@/models/page';
import dbConnect from '@/lib/dbConnect';

const pages = [
  {
    title: 'About Us',
    slug: 'about',
    content: '<p>Welcome to our platform. We strive to provide the best content for our users.</p>',
    createdAt: new Date('2024-05-01T10:00:00Z')
  },
  {
    title: 'Contact',
    slug: 'contact',
    content: "<p>You can reach us at <a href='mailto:support@example.com'>support@example.com</a>.</p>",
    createdAt: new Date('2024-05-02T12:30:00Z')
  },
  {
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    content: '<p>We value your privacy. Read our full policy here.</p>',
    createdAt: new Date('2024-05-03T09:45:00Z')
  },
  {
    title: 'Terms of Service',
    slug: 'terms-of-service',
    content: '<p>By using our service, you agree to the following terms and conditions...</p>',
    createdAt: new Date('2024-05-04T14:20:00Z')
  },
  {
    title: 'Blog',
    slug: 'good',
    content: '<p>Check out our latest blog posts and updates.</p>',
    createdAt: new Date('2024-05-05T08:15:00Z')
  }
];

async function seed() {
  await dbConnect();
  await Page.deleteMany({});
  await Page.insertMany(pages);
  console.log('Pages seeded!');
  mongoose.disconnect();
}

seed();
