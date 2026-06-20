import { Card, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { extensions } from '../data/extensionData';

const ExtensionCards = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const imageModules = import.meta.glob<{default:string}>('../../assets/images/*.{png, jpg, jpeg, svg}');

        console.log(Object.keys(imageModules));

        const loadImages = async () => {
            const imageUrls = await Promise.all(
                Object.values(imageModules).map(async (importImage) => {
                    const mod = await importImage();
                    return mod.default;
                })
            );
            console.log(imageUrls);
            setImages(imageUrls);
        };
        loadImages();
    }, []);
    
  return (
      <SimpleGrid columns={{base:1, md:2, lg:4}} gap={2}>
          {extensions.map((extension) => (
              <Card.Root key={extension.id}>
                  <Card.Body>
                      <img src={extension.logo} alt={extension.name} width='20%' />
                      <Card.Title>{extension.name}</Card.Title>
                      <Card.Description>{extension.description}</Card.Description>
                  </Card.Body>
              </Card.Root>
          ))}
      </SimpleGrid>
  )
}

export default ExtensionCards