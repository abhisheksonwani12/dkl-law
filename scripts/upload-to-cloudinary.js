/**
 * Cloudinary Migration Script
 * 
 * Usage:
 *   1. Set environment variables in .env.local:
 *      CLOUDINARY_CLOUD_NAME=your_cloud_name
 *      CLOUDINARY_API_KEY=your_api_key
 *      CLOUDINARY_API_SECRET=your_api_secret
 *   2. Run:
 *      node scripts/upload-to-cloudinary.js
 */

const fs = require('fs');
const path = require('path');

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.log('⚠️  Cloudinary credentials not detected in environment.');
  console.log('To push images to Cloudinary, please set:');
  console.log('  CLOUDINARY_CLOUD_NAME=...');
  console.log('  CLOUDINARY_API_KEY=...');
  console.log('  CLOUDINARY_API_SECRET=...');
  console.log('\nOnce set, run: node scripts/upload-to-cloudinary.js');
  process.exit(0);
}

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

const publicDir = path.join(__dirname, '../public');

async function uploadFile(filePath, publicId) {
  try {
    const res = await cloudinary.uploader.upload(filePath, {
      public_id: `dkl/${publicId}`,
      overwrite: true,
      resource_type: 'image',
    });
    console.log(`✓ Uploaded ${publicId} -> ${res.secure_url}`);
  } catch (err) {
    console.error(`✗ Error uploading ${publicId}:`, err.message);
  }
}

async function processDirectory(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'vcards') {
        await processDirectory(fullPath, `${prefix}${entry.name}/`);
      }
    } else if (/\.(webp|png|jpg|jpeg|svg)$/i.test(entry.name)) {
      const publicId = `${prefix}${path.parse(entry.name).name}`;
      await uploadFile(fullPath, publicId);
    }
  }
}

async function main() {
  console.log(`🚀 Starting Cloudinary upload to cloud "${cloudName}"...`);
  await processDirectory(publicDir);
  console.log('🎉 Cloudinary upload completed successfully!');
}

main();
