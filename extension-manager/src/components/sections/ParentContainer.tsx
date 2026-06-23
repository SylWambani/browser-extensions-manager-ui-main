import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'

const ParentContainer = () => {
  return (
    <Box>
      <Navbar />
      {/* <TopSection filter={filter} setFilter={setFilter} />
      <ExtensionCards
        extensionsList={extensionsList}
        setExtensionsList={setExtensionsList}
        filter={filter}
      /> */}
    </Box>
  );
}

export default ParentContainer