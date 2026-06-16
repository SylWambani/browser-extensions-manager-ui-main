import { Box, ButtonGroup, HStack } from "@chakra-ui/react";
import Headings from "./Headings";
import Buttons from "./Buttons";

const TopSection = () => {
  return (
    <Box>
      <HStack>
        <Headings>Extensions List</Headings>
        <ButtonGroup>
          <Buttons>All</Buttons>
          <Buttons>Active</Buttons>
          <Buttons>Inactve</Buttons>
        </ButtonGroup>
      </HStack>
    </Box>
  );
};

export default TopSection;
