import { Link } from "react-router-dom";

import { boldArrowIcon, heroMainIcon } from "../lib";

const Navbar = () => {

  return (
    <nav className="w-full h-[100px] flex pr-10 pt-5 justify-between">
      <img src={heroMainIcon} alt="Navbar Icon" className="size-10"/>
      <a href="" target="_blank" className="flex items-center gap-x-1 w-fit h-fit cursor-pointer hover:opacity-75 active:opacity-40">
        <p className="font-[300] text-xl tracking-tighter">INSTAGRAM</p>
        <img src={boldArrowIcon} className="-rotate-45 size-[18px]"/>
      </a>
      <div className="flex items-center justify-between h-fit w-[180px]">
        <span className="pulse rounded-full bg-black w-2 h-2" />
        <Link to="/about">
          <p className="font-[800] text-black text-xl tracking-tighter cursor-pointer hover:opacity-75 active:opacity-40 transition-all">LEARN ABOUT US</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
