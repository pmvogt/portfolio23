import { Card, Flex, Text, Button, Container } from '@radix-ui/themes';
import Image from 'next/image';
import NavToolbar from '../components/navtoolbar';
import { list } from '@vercel/blob';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  fullResUrl: string;
}

async function getGalleryImages(): Promise<GalleryImage[]> {
  const { blobs } = await list();
  return blobs.map((blob) => ({
    id: blob.pathname,
    title: blob.pathname.split('/').pop() || '',
    description: 'AI-generated image',
    thumbnailUrl: blob.url,
    fullResUrl: blob.downloadUrl,
  }));
}

export default async function AIGalleryPage() {
  const galleryImages = await getGalleryImages();

  return (
    <Container size="3">
      <NavToolbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">AI-Generated Image Gallery</h1>
        <Flex direction="row" gap="4" wrap="wrap">
          {galleryImages.map((image) => (
            <Card key={image.id} style={{ width: 300 }}>
              <Image
                src={image.thumbnailUrl}
                alt={image.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4"
              />
              <Text as="h2" size="5" weight="bold" mb="1">
                {image.title}
              </Text>
              <Text as="p" size="2" color="gray" mb="3">
                {image.description}
              </Text>
              <Button asChild>
                <a href={image.fullResUrl} download>
                  Download Full Resolution
                </a>
              </Button>
            </Card>
          ))}
        </Flex>
      </main>
    </Container>
  );
}
