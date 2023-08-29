'use client'

import { CldImage } from 'next-cloudinary'

export function CloudinaryImage({ publicId, ...props }: { publicId: string }) {
  return <CldImage src={publicId} {...props} />
}
