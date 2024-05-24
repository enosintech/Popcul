import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="w-full h-[50px] flex items-center justify-between pr-10">
        <p className="font-[500] text-xl tracking-tighter">© ESTABLISHED 2021</p>
        <div className="flex gap-x-5">
            <FontAwesomeIcon className="cursor-pointer hover:opacity-75 active:opacity-40" icon={faUser} color="black" size="lg"/>
            <FontAwesomeIcon className="cursor-pointer hover:opacity-75 active:opacity-40"  icon={faCartShopping} color="black" size="lg"/>
        </div>
    </footer>
  )
}

export default Footer;
