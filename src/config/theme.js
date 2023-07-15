import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === "dark" ? "grey.500" : "#aacbf2"
      }
    })
  }
})

export default theme