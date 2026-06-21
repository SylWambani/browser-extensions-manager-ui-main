import { Card, SimpleGrid, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { extensions } from "../data/extensionData";
import Buttons from "./Buttons";

const ExtensionCards = () => {
  const [images, setImages] = useState<string[]>([]);
  const [extensionSwitch, setExtensionSwitch] = useState(extensions);

  useEffect(() => {
    const imageModules = import.meta.glob<{ default: string }>(
      "../../assets/images/*.{png, jpg, jpeg, svg}",
    );

    console.log(Object.keys(imageModules));

    const loadImages = async () => {
      const imageUrls = await Promise.all(
        Object.values(imageModules).map(async (importImage) => {
          const mod = await importImage();
          return mod.default;
        }),
      );
      console.log(imageUrls);
      setImages(imageUrls);
    };
    loadImages();
  }, []);

  const handleToggle = (id: number) => {
    setExtensionSwitch((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, active: !ext.active } : ext,
      ),
    );
  };

  const handleRemove = (id: number) => {
    setExtensionSwitch((prev) => prev.filter((ext) => ext.id !== id));
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={2}>
      {extensionSwitch.map((extension) => (
        <Card.Root key={extension.id}>
          <Card.Body>
            <img src={extension.logo} alt={extension.name} width="20%" />
            <Card.Title>{extension.name}</Card.Title>
            <Card.Description>{extension.description}</Card.Description>
          </Card.Body>
          <Card.Footer>
            <Switch.Root
              checked={extension.active}
              onCheckedChange={() => handleToggle(extension.id)}
            >
              <Buttons
                variant="outline"
                onClick={() => handleRemove(extension.id)}
              >
                Remove
              </Buttons>
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label />
            </Switch.Root>
          </Card.Footer>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};

export default ExtensionCards;
