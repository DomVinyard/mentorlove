import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import Navbar from './components/Navbar'
import Landing from "./pages/landing/Landing"
import Footer from "./components/Footer"


export const App = () => (
  <ChakraProvider theme={theme}>
  <Navbar/>
  <Landing/>
  <Footer/>  
  </ChakraProvider>
)
