import { Heading } from "@chakra-ui/react"

interface TitlesProps {
  children: React.ReactNode;
}

const Headings = ({children}:TitlesProps) => {
  return (
    <Heading>{children}</Heading>
  )
}

export default Headings