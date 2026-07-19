import { Card, HStack, SimpleGrid, Switch, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { extensions } from "../data/extensionData";
import Buttons from "./Buttons";

interface Props {
  extensionsList: typeof extensions;
  setExtensionsList: React.Dispatch<React.SetStateAction<typeof extensions>>;
  filter: "all" | "active" | "inactive";
}

const ExtensionCards = ({
  extensionsList,
  setExtensionsList,
  filter,
}: Props) => {
  // console.log("extensionsList:", extensionsList);
  const navBg = useColorModeValue(
    "#fbfdfe", // light
    "#212636", // dark
  );
  const solidTextColor = useColorModeValue("#fbfdfe", "#09153e");
  const switchUncheckedBg = useColorModeValue("#d6e2f5", "#3a3f55");

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
        <Card.Root key={extension.id} borderRadius="xl" background={navBg}>
          <Card.Body>
            <HStack display="flex" alignItems="flex-start">
              <img src={extension.logo} alt={extension.name} width="20%" />
              <VStack alignItems="flex-start" gap={2}>
                <Card.Title>{extension.name}</Card.Title>
                <Card.Description>{extension.description}</Card.Description>
              </VStack>
            </HStack>
          </Card.Body>
          <Card.Footer display="flex" justifyContent="space-between">
            <Buttons
              variant="outline"
              borderColor="#545969"
              _hover={{
                backgroundColor: "#c7221a",
                color: solidTextColor,
                border: "none",
              }}
              onClick={() => handleRemove(extension.id)}
            >
              Remove
            </Buttons>
            <Switch.Root
              colorPalette="red"
              checked={extension.active}
              onCheckedChange={() => handleToggle(extension.id)}
            >
              <Switch.HiddenInput />
              <Switch.Control
                style={{
                  backgroundColor: extension.active
                    ? "#c7221a"
                    : switchUncheckedBg,
                }}
              >
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
