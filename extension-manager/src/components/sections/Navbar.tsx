import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/images/logo.svg";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";
import { useColorMode } from "../ui/color-mode";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box>
      <HStack>
        <Image src={logo} alt="Logo" />
        <Image
          src={colorMode === "light" ? moon : sun}
          alt={
            colorMode === "light"
              ? "Light mode - show moon"
              : "Dark mode - show sun"
          }
          onClick={toggleColorMode}
          cursor="pointer"
          role="button"
          aria-label="Toggle color mode"
        />
      </HStack>
    </Box>
  );
};

export default Navbar;
