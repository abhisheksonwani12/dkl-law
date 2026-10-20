/**
 * Image URL helper that supports both local optimized WebP assets
 * and optional Cloudinary / CDN delivery.
 * 
 * To switch to Cloudinary in the future:
 * Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your .env / Vercel dashboard.
 * When set, this helper automatically serves via Cloudinary edge CDN.
 * When not set, it serves the ultra-fast local WebP assets directly.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function getImageUrl(
  path: string,
  options?: { width?: number; quality?: string | number }
): string {
  if (!path) return '';

  // Map PNG paths to modern WebP equivalents
  const webpPath = path.replace(/\.png$/i, '.webp');

  if (CLOUD_NAME) {
    const transforms: string[] = ['f_auto', 'q_auto'];
    if (options?.width) transforms.push(`w_${options.width}`);
    if (options?.quality) transforms.push(`q_${options.quality}`);
    const cleanPath = webpPath.startsWith('/') ? webpPath.slice(1) : webpPath;
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms.join(',')}/dkl/${cleanPath}`;
  }

  return webpPath;
}
