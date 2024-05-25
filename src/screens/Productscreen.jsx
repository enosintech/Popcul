import { Link } from "react-router-dom";

import { upTransition } from "../utils/transition";

const Productscreen = () => {
  return (
    <section className="w-full h-[200vh]">
        <Link to="/">Soon this page will be filled with products. I am still a Work in Progress! Click me to go back ;)</Link>
    </section>
  )
}

export default upTransition(Productscreen);
