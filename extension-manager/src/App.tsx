import { useState } from 'react';
import { Box } from '@chakra-ui/react'
import './App.css'
import { extensions } from './components/data/extensionData';
import ExtensionCards from './components/sections/ExtensionCards';
import TopSection from './components/sections/TopSection';
import Navbar from './components/sections/Navbar';

export type FilterType = "all" | "active" | "inactive";

function App() {
  const [extensionsList, setExtensionsList] = useState(extensions);
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <Box
      padding={{ base: 4, md: 8 }}
      margin="0"
      background="linear-gradient(180deg, #040918 0%, #091540 100%)"
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

export default App
