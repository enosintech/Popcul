import { heroMainIcon } from "../lib";

const Navbar = () => {
  return (
    <nav className="w-full h-[100px] flex pr-10 pt-5 justify-between">
      <img src={heroMainIcon} alt="Navbar Icon" className="size-10"/>
      <div className="flex items-center gap-x-2 h-fit w-fit">
        <span className="rounded-full bg-black w-2 h-2" />
        <p className="font-[800] text-black text-xl tracking-tighter cursor-pointer hover:opacity-75 active:opacity-40 transition-all">LEARN ABOUT US</p>
      </div>
    </nav>
  )
}

export default Navbar;
