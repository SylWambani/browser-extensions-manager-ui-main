import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import TopSection from './TopSection'

const ParentContainer = () => {
  return (
      <Box>
          <Navbar />
          <TopSection/>
    </Box>
  )
}

export default ParentContainer