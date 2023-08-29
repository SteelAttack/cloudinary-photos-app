'use client'
import Image from 'next/image'
import { CldImage, CldUploadButton } from 'next-cloudinary'
import { useState } from 'react'

export type UploadResult = {
  info: {
    public_id: string
  }
  event: 'success'
}

export default function Home() {
  const [imageId, setImageId] = useState('wpvzdhitdkse1p6nklkr')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id)
        }}
        uploadPreset="peii6ddf"
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  )
}
