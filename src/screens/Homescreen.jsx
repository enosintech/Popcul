import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { upTransition } from "../utils/transition";

const Homescreen = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Footer />
    </>
  )
}

export default upTransition(Homescreen);
