import { Textarea } from "@chakra-ui/react"
import React from "react"
import ResizeTextarea from "react-textarea-autosize"

// eslint-disable-next-line react/display-name
export const AutoResizeTextarea = React.forwardRef((props, ref) => {
  return <Textarea as={ResizeTextarea} minH="unset" ref={ref} {...props} />
})