import { list, getDownloadUrl } from '@vercel/blob';
import NavToolbar from '../components/navtoolbar';
import GalleryGrid from './gallerygrid';
import { Container, Flex, Heading, Text } from '@radix-ui/themes';

interface GalleryImage {
  id: string;
  city: string;
  type: string;
  thumbnailUrl: string;
  highResUrl: string;
  printCmykUrl?: string;
}

// Add this function to check if we're in a build environment
function isBuildTime() {
  return process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV !== 'production';
}

async function getGalleryImages(): Promise<GalleryImage[]> {
  // Check if we're in a build environment
  if (isBuildTime()) {
    console.log('Build time detected, returning empty array');
    return [];
  }

  const { blobs } = await list({ prefix: 'ai-pics/' });
  const imageMap = new Map<string, Partial<GalleryImage>>();

  console.log('Total blobs:', blobs.length);

  for (const blob of blobs) {
    console.log('Processing blob:', blob.pathname);
    const pathParts = blob.pathname.split('/');

    if (pathParts.length < 3) {
      console.log('Skipping invalid path:', blob.pathname);
      continue;
    }

    const [, city, filename] = pathParts;
    const fileExtension = filename.split('.').pop()?.toLowerCase();

    // Extract image type (day, night, coast, street, etc.)
    let imageType = filename.split('-')[0].trim().toLowerCase();

    // Special handling for "gundo coast" and "gundo street"
    if (city === 'el-segundo' && imageType === 'gundo') {
      imageType = filename.split('-').slice(0, 2).join(' ').trim().toLowerCase();
    }

    // Handle cases where city name is in the filename (e.g., "fort worth - day")
    if (
      filename.toLowerCase().startsWith(city.replace('-', ' ')) ||
      (city === 'san-francisco' && filename.startsWith('sf'))
    ) {
      imageType = filename.split('-')[1].trim().toLowerCase();
    }

    const imageKey = `${city}-${imageType}`;

    console.log(`  City: ${city}, Type: ${imageType}, Key: ${imageKey}`);

    if (!imageMap.has(imageKey)) {
      imageMap.set(imageKey, { id: imageKey, city, type: imageType });
    }

    const image = imageMap.get(imageKey)!;

    if (fileExtension === 'png') {
      image.thumbnailUrl = blob.url;
      image.highResUrl = getDownloadUrl(blob.url);
      console.log(`  Added PNG: ${filename}`);
    } else if (fileExtension === 'zip' && filename.toLowerCase().includes('cmyk')) {
      image.printCmykUrl = getDownloadUrl(blob.url);
      console.log(`  Added ZIP: ${filename}`);
    }
  }

  const images: GalleryImage[] = [];
  imageMap.forEach((image, key) => {
    console.log(`Processing image: ${key}`);
    console.log(`  Thumbnail: ${image.thumbnailUrl}`);
    console.log(`  High Res: ${image.highResUrl}`);
    console.log(`  ZIP: ${image.printCmykUrl}`);

    if (image.thumbnailUrl && image.highResUrl) {
      images.push(image as GalleryImage);
      console.log(`  Added to final array`);
    } else {
      console.log(`  Skipping image due to missing URLs`);
    }
  });

  console.log('Total processed images:', images.length);

  return images;
}

export default async function AIGalleryPage() {
  const galleryImages = await getGalleryImages();

  return (
    <>
      <NavToolbar />
      <Container pt="4">
        <Flex direction="column" gap="3">
          <Heading color="bronze">Cityscapes</Heading>
          <Text>
            Below are a collection of Midjourney-generated cityscapes inspired by the work of
            Hiroshi Nagai and Eijin Suzuki.
          </Text>
          <Text>
            Please feel free to download and use as you see fit. RGB images are 4096x4096. CMYK
            images are 4k x 6k portrait and landscape in CMYK colorspace in JPEG format.
          </Text>
          <GalleryGrid images={galleryImages} />
        </Flex>
      </Container>
    </>
  );
}
