import { Box, ButtonGroup, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import Headings from "./Headings";
import Buttons from "./Buttons";
import type { FilterType } from "../../App";

interface Props {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const TopSection = ({ filter, setFilter }: Props) => {
  // const [extensionsList, setExtensionsList] = useState(extensions);
  const navBg = useColorModeValue(
    "#fbfdfe", // light
    "#212636", // dark
  );
  const outlineTextColor = useColorModeValue("#09153e", "#fbfdfe");
  const outlineHoverBg = useColorModeValue("#e2e8f0", "#545969");
  const solidTextColor = useColorModeValue("#fbfdfe", "#09153e");

  return (
    <Box
      mb={{ base: 6, md: 8 }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
    >
        <Headings>Extensions List</Headings>
        <ButtonGroup>
          <Buttons
            bgColor={filter === "all" ? "#c7221a" : navBg}
            colorPalette={filter === "all" ? "red" : "gray"}
            variant={filter === "all" ? "solid" : "outline"}
            color={filter === "all" ? solidTextColor : outlineTextColor}
            _hover={
              filter === "all"
                ? { backgroundColor: "#c7221a", color: solidTextColor }
                : {
                    backgroundColor: outlineHoverBg,
                    color: outlineTextColor,
                  }
            }
            onClick={() => setFilter("all")}
          >
            All
          </Buttons>
          <Buttons
            bgColor={filter === "active" ? "#c7221a" : navBg}
            color={filter === "active" ? solidTextColor : outlineTextColor}
            _hover={
              filter === "active"
                ? { backgroundColor: "#c7221a", color: solidTextColor }
                : { backgroundColor: outlineHoverBg, color: outlineTextColor }
            }
            colorPalette={filter === "active" ? "red" : "gray"}
            variant={filter === "active" ? "solid" : "outline"}
            onClick={() => setFilter("active")}
          >
            Active
          </Buttons>
          <Buttons
            bgColor={filter === "inactive" ? "#c7221a" : navBg}
            color={filter === "inactive" ? solidTextColor : outlineTextColor}
            _hover={
              filter === "inactive"
                ? { backgroundColor: "#c7221a", color: solidTextColor }
                : { backgroundColor: outlineHoverBg, color: outlineTextColor }
            }
            colorPalette={filter === "inactive" ? "red" : "gray"}
            variant={filter === "inactive" ? "solid" : "outline"}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </Buttons>
        </ButtonGroup>
    </Box>
  );
};

export default TopSection;
