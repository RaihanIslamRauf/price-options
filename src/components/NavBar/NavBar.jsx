import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Our Services" },
    { id: 4, path: "/contact", name: "Contact Us" },
    { id: 5, path: "/profile/:username", name: "User Profile" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div className="text-2xl md:hidden" onClick={() =>setOpen(!open)}>
        {
            open === true ? <AiOutlineClose></AiOutlineClose> :  <AiOutlineMenu ></AiOutlineMenu>
        }
      </div>
     
      <ul className={`md:flex duration-1000 absolute
        ${open ? 'top-16' : '-top-60'} md:static  px-6 bg-yellow-200`}>
      {routes.map((route) => <Link key={route.id} route={route}></Link>)}
      </ul>
    </nav>
  );
};


export default NavBar;
