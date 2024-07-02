import MenuIcon from "@mui/icons-material/Menu";

function NavbarComponent() {
  function toggleNavbar() {
    const navbar = document.querySelector("#navbar-menu");
    navbar?.classList.toggle("hidden");
  }

  return (
    <>
      {/* Navigation Menu */}
      <nav>
        <div className="xl:container xl:mx-auto flex justify-between items-center py-4 px-2 xl:px-0 relative lg:static">
          <h1 className="text-3xl font-bold text-brand text-nowrap">
            SEA Salon
          </h1>
          <button className="lg:hidden" onClick={toggleNavbar}>
            <MenuIcon className="text-brand" fontSize="large" />
          </button>
          <div
            className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center justify-between grow absolute lg:static top-16 left-0 z-50 bg-white lg:bg-none w-full p-4 lg:p-0"
            id="navbar-menu"
          >
            <ul className="lg:flex justify-center grow h-fit">
              <li className="px-0 lg:px-8 py-4 lg:py-0 h-fit">
                <a href="#" className="text-lg block my-auto">
                  Appointment
                </a>
              </li>
              <li className="px-0 lg:px-8 py-4 lg:py-0 h-fit">
                <a href="#" className="text-lg block my-auto">
                  Service
                </a>
              </li>
              <li className="px-0 lg:px-8 py-4 lg:py-0 h-fit">
                <a href="#" className="text-lg block my-auto">
                  About Us
                </a>
              </li>
              <li className="px-0 lg:px-8 py-4 lg:py-0 h-fit">
                <a href="#" className="text-lg block my-auto">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="text-center w-full lg:w-fit">
              <button className="text-brand px-8 py-2 font-medium">
                Sign Up
              </button>
              <button className="bg-brand text-white px-8 py-4 font-medium rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* End of Navigation Menu */}
    </>
  );
}

export default NavbarComponent;
