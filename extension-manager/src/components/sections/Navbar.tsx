import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/images/logo.svg";
import sun from "../../assets/images/icon-sun.svg"

const Navbar = () => {
  return (
    <Box>
      <HStack>
              <Image src={logo} alt="Logo" />
              <Image src={sun} alt="Light Mode" />
      </HStack>
    </Box>
  );
};

export default Navbar;
