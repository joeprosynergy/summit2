'use client';

import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

interface CloudinaryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

/**
 * CloudinaryImage - A simple image component that serves images from Cloudinary CDN.
 * 
 * IMPORTANT: Images must be pre-uploaded via /admin/cloudinary-upload
 * Use cloudinaryImages from @/lib/cloudinary for the src prop.
 * 
 * Usage:
 * ```tsx
 * import { cloudinaryImages } from '@/lib/cloudinary';
 * 
 * <CloudinaryImage src={cloudinaryImages.heroShed} alt="Hero shed" className="w-full" />
 * ```
 */
export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  ...props
}) => {
  return (
    <Image src={src}  alt={alt} className={className} loading="lazy" onError={(e) = width={75} height={75} /> {
        // If Cloudinary fails, fallback to provided fallback
        if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
          e.currentTarget.src = fallbackSrc;
        }
      }}
      {...props}
    />
  );
};

export default CloudinaryImage;