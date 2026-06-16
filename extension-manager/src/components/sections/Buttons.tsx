import {
  Button,
  type ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonsProps extends ChakraButtonProps{
    children: React.ReactNode;
}

const Buttons = ({children, ...props}:ButtonsProps) => {
    return (
      <Button {...props}>
        {children}
      </Button>
  )
}

export default Buttons