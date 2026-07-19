import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";
import "./App.css";
import { extensions } from "./components/data/extensionData";
import ExtensionCards from "./components/sections/ExtensionCards";
import TopSection from "./components/sections/TopSection";
import Navbar from "./components/sections/Navbar";

export type FilterType = "all" | "active" | "inactive";

function App() {
  const [extensionsList, setExtensionsList] = useState(extensions);
  const [filter, setFilter] = useState<FilterType>("all");
  const navBg = useColorModeValue(
    "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)", // light
    "linear-gradient(180deg, #040918 0%, #091540 100%)", // dark
  );

  return (
    <Box
      padding={{ base: 4, md: 8 }}
      margin="0"
      minH="100vh"
      maxW="100vw"
      overflow="hidden"
      background={navBg}
    >
      <Navbar />
      <TopSection filter={filter} setFilter={setFilter} />

      <ExtensionCards
        extensionsList={extensionsList}
        setExtensionsList={setExtensionsList}
        filter={filter}
      />
    </Box>
  );
}

export default App;
