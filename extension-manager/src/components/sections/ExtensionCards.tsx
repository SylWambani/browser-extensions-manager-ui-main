import { Card, SimpleGrid, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { extensions } from "../data/extensionData";
import Buttons from "./Buttons";

interface Props {
  extensionsList: typeof extensions;
  setExtensionsList: React.Dispatch<React.SetStateAction<typeof extensions>>;
  filter: "all" | "active" | "inactive";
}

const ExtensionCards = ({ extensionsList, setExtensionsList, filter }: Props) => {
  console.log("extensionsList:", extensionsList);
  // const [images, setImages] = useState<string[]>([]);
  // const [extensionSwitch, setExtensionSwitch] = useState(extensions);

  // useEffect(() => {
  //   const imageModules = import.meta.glob<{ default: string }>(
  //     "../../assets/images/*.{png, jpg, jpeg, svg}",
  //   );

  //   console.log(Object.keys(imageModules));

  //   const loadImages = async () => {
  //     const imageUrls = await Promise.all(
  //       Object.values(imageModules).map(async (importImage) => {
  //         const mod = await importImage();
  //         return mod.default;
  //       }),
  //     );
  //     console.log(imageUrls);
  //     setImages(imageUrls);
  //   };
  //   loadImages();
  // }, []);

  const handleToggle = (id: number) => {
    setExtensionsList((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, active: !ext.active } : ext,
      ),
    );
  };

  const handleRemove = (id: number) => {
    setExtensionsList((prev) => prev.filter((ext) => ext.id !== id));
  };

  const filteredExtensions = extensionsList.filter((extension) => {
    if (filter === "active") return extension.active;
    if (filter === "inactive") return !extension.active;
    return true;
  });

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={2}>
      {filteredExtensions.map((extension) => (
        <Card.Root key={extension.id}>
          <Card.Body>
            <img src={extension.logo} alt={extension.name} width="20%" />
            <Card.Title>{extension.name}</Card.Title>
            <Card.Description>{extension.description}</Card.Description>
          </Card.Body>
          <Card.Footer>
            <Buttons
              variant="outline"
              onClick={() => handleRemove(extension.id)}
            >
              Remove
            </Buttons>
            <Switch.Root
              checked={extension.active}
              onCheckedChange={() => handleToggle(extension.id)}
            >
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
