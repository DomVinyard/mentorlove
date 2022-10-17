
import { ChakraProvider } from "@chakra-ui/react"

import Navbar from './components/Navbar'
import Landing from "./pages/landing/Landing"
import Footer from "./components/Footer"
import customTheme from './theme'


export const App = () => (
  <ChakraProvider theme={customTheme}>
   
        <Navbar />
        <Landing />
        <Footer />
 
  </ChakraProvider>
)
