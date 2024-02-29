("use client");
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";

export default function NavBar() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="#">
        <img src={reactLogo} className="h-6 mr-3 sm:h-9" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Movies Space
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
        <DarkThemeToggle className="mx-3" />
      </div>

      <Navbar.Collapse>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="search">Search</Link>
        </div>
        <div>
          <Link to="todo">to-Watch</Link>
        </div>
        <div>
          <Link to="signup">Sign up</Link>
        </div>
        <div>
          <Link to="signin">Sign in</Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
