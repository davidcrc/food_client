import { createClient } from "@sanity/client"
import imageBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const client = createClient({
  projectId: "t3ykqhan",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
})

const builder = imageBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)

export default client
