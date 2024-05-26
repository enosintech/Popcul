import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { homeTransition } from "../utils/transition";

const Homescreen = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Footer />
    </>
  )
}

export default homeTransition(Homescreen);
