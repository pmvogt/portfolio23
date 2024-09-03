'use client';

import { Card, Flex, Text, Button, Heading } from '@radix-ui/themes';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  city: string;
  type: string;
  thumbnailUrl: string;
  highResUrl: string;
  printCmykUrl?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <Flex direction="row" gap="4" wrap="wrap">
      {images.map((image) => (
        <Card key={image.id} style={{ width: 300 }}>
          <Image
            src={image.thumbnailUrl}
            alt={`${image.city} - ${image.type}`}
            width={300}
            height={200}
            className="w-full h-40 object-cover mb-4"
          />
          <Heading as="h2" size="5" weight="bold" mb="1">
            {image.city}
          </Heading>
          <Text as="p" size="2" color="gray" mb="3">
            {image.type}
          </Text>
          <Flex direction="column" gap="2">
            <Button asChild variant="solid">
              <a href={image.highResUrl} download>
                Download High Res RGB (PNG)
              </a>
            </Button>
            {image.printCmykUrl && (
              <Button asChild variant="outline">
                <a href={image.printCmykUrl} download>
                  Download Print CMYK (ZIP)
                </a>
              </Button>
            )}
          </Flex>
        </Card>
      ))}
    </Flex>
  );
}
