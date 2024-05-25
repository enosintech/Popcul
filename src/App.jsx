import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Aboutscreen from "./screens/Aboutscreen";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";

const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homescreen />} />
        <Route path="/about" element={<Aboutscreen/>} />
        <Route path="/products" element={<Productscreen />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App;
