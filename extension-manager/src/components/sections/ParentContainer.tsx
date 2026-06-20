import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import TopSection from './TopSection'
import ExtensionCards from './ExtensionCards'

const ParentContainer = () => {
  return (
      <Box>
          <Navbar />
          <TopSection/>
          <ExtensionCards/>
    </Box>
  )
}

export default ParentContainer