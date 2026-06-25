import { Box, ButtonGroup, HStack } from "@chakra-ui/react";
import Headings from "./Headings";
import Buttons from "./Buttons";
import { useState } from "react";
import type { FilterType } from "../../App";
import { extensions } from "../data/extensionData";

interface Props {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const TopSection = ({ filter, setFilter }: Props) => {
  // const [extensionsList, setExtensionsList] = useState(extensions);

  return (
    <Box mb={{ base: 6, md: 8 }}>
      <HStack display="flex" justifyContent="space-between" alignItems="center">
        <Headings>Extensions List</Headings>
        <ButtonGroup>
          <Buttons
            colorPalette={filter === "all" ? "red" : "gray"}
            variant={filter === "all" ? "solid" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Buttons>
          <Buttons
            colorPalette={filter === "active" ? "red" : "gray"}
            variant={filter === "active" ? "solid" : "outline"}
            onClick={() => setFilter("active")}
          >
            Active
          </Buttons>
          <Buttons
          colorPalette={filter === "inactive" ? "red" : "gray"}
            variant={filter === "inactive" ? "solid" : "outline"}
            onClick={() => setFilter("inactive")}
          >
            Inactve
          </Buttons>
        </ButtonGroup>
      </HStack>
    </Box>
  );
};

export default TopSection;
