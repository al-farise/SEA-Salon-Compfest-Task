import MenuIcon from "@mui/icons-material/Menu";

function NavbarComponent() {
  return (
    <>
      {/* Navigation Menu */}
      <nav>
        <div className="xl:container xl:mx-auto flex justify-between items-center py-4 px-2 xl:px-0">
          <h1 className="text-3xl font-bold text-brand">SEA Salon</h1>
          <button className="lg:hidden">
            <MenuIcon className="text-brand" fontSize="large" />
          </button>
          <ul className="lg:flex justify-between h-fit hidden">
            <li className="px-8 h-fit">
              <a href="#" className="text-lg block my-auto">
                Appointment
              </a>
            </li>
            <li className="px-8 h-fit">
              <a href="#" className="text-lg block my-auto">
                Service
              </a>
            </li>
            <li className="px-8 h-fit">
              <a href="#" className="text-lg block my-auto">
                About Us
              </a>
            </li>
            <li className="px-8 h-fit">
              <a href="#" className="text-lg block my-auto">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="hidden lg:block">
            <button className="text-brand px-8 py-2 font-medium">
              Sign Up
            </button>
            <button className="bg-brand text-white px-8 py-4 font-medium rounded-md">
              Login
            </button>
          </div>
        </div>
      </nav>
      {/* End of Navigation Menu */}
    </>
  );
}

export default NavbarComponent;
