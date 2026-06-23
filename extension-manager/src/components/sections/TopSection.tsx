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
    <Box>
      <HStack>
        <Headings>Extensions List</Headings>
        <ButtonGroup>
          <Buttons
            variant={filter === "all" ? "solid" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Buttons>
          <Buttons
            variant={filter === "active" ? "solid" : "outline"}
            onClick={() => setFilter("active")}
          >
            Active
          </Buttons>
          <Buttons
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
