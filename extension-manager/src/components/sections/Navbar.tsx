import { Box, HStack, Image } from "@chakra-ui/react";
import logoDark from "../../assets/images/logo-dark.svg";
import logoLight from "../../assets/images/logo-light.svg";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";
import { useColorMode, useColorModeValue } from "../ui/color-mode";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const logo = useColorModeValue(logoLight, logoDark);
  const navBg = useColorModeValue(
    "#fbfdfe", // light
    "#212636", // dark
  );
  const themeBtn = useColorModeValue("#ededed", "#545969");

  return (
    <Box
      mb={{ base: 8, md: 10 }}
      padding={{ base: 2 }}
      borderRadius="xl"
      background={navBg}
    >
      <HStack display="flex" justifyContent="space-between" alignItems="center">
        <Image src={logo} alt="Logo" className="logo" />
        <Box
          _hover={{ backgroundColor: themeBtn }}
          w="40px"
          h="40px"
          borderRadius="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
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
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
