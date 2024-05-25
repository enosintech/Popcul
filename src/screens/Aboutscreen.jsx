import { Link } from "react-router-dom";

import { leftTransition } from "../utils/transition";

const Aboutscreen = () => {
  return (
    <section className="w-full h-[100vh]">
        <Link to="/">I will tell you more about us later. I am still a Work in Progress! Click me to go back ;)</Link>
    </section>
  )
}

export default leftTransition(Aboutscreen);
