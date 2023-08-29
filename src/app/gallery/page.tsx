'use client'
import { CldUploadButton } from 'next-cloudinary'
import { UploadResult } from '../page'
import { Button } from '@/components/ui/button'
import { UploadIcon } from '../../../public/icons/Upload'

export default function GalleryPage() {
  return (
    <section className="flex justify-between">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <Button asChild>
        <div className="flex gap-2">
          <UploadIcon></UploadIcon>

          <CldUploadButton
            onUpload={(result: UploadResult) => {
              //setImageId(result.info.public_id)
            }}
            uploadPreset="peii6ddf"
          />
        </div>
      </Button>
    </section>
  )
}
