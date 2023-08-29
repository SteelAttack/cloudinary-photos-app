import { CldImage } from 'next-cloudinary'
import UploadButton from './UploadButton'
import cloudinary from 'cloudinary'
import { CloudinaryImage } from './CloudinaryImage'

type SearchResult = {
  public_id: string
}

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(10)
    .execute()) as { resources: SearchResult[] }

  console.log(results)
  return (
    <section className='flex flex-col gap-8'>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <UploadButton />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {results.resources.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            alt="Gallery Images"
            width={400}
            height={300}
            publicId={result.public_id}
          />
        ))}
      </div>
    </section>
  )
}
