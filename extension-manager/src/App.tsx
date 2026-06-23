import { useState } from 'react';
import './App.css'
import { extensions } from './components/data/extensionData';
import ParentContainer from './components/sections/ParentContainer'
import ExtensionCards from './components/sections/ExtensionCards';
import TopSection from './components/sections/TopSection';

export type FilterType = "all" | "active" | "inactive";

function App() {
  const [extensionsList, setExtensionsList] = useState(extensions);
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <>
      <ParentContainer/>
       <TopSection
        filter={filter}
        setFilter={setFilter}
      />

      <ExtensionCards
        extensionsList={extensionsList}
        setExtensionsList={setExtensionsList}
        filter={filter}
      />
    </>
  )
}

export default App
