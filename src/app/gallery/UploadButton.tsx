'use client'
import { CldUploadButton } from 'next-cloudinary'
import { UploadResult } from '../page'
import { Button } from '@/components/ui/button'
import { UploadIcon } from '../../../public/icons/Upload'
import { useRouter } from 'next/navigation'

export default function UploadButton() {
  const router = useRouter()

  return (
    <Button asChild>
      <div className="flex gap-2">
        <UploadIcon></UploadIcon>

        <CldUploadButton
          onUploadAdded={(result: UploadResult) => {
            //setImageId(result.info.public_id)
            router.refresh()
          }}
          uploadPreset="peii6ddf"
        />
      </div>
    </Button>
  )
}
