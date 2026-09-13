import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-20 bg-white shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Technologies</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn hidden sm:inline-flex rounded-full btn-outline text-black hover:text-white">Sign In</a>
          <a className="btn brand-gradient text-white rounded-full ml-2">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
