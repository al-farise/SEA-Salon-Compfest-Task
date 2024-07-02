import LocalPhone from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

function FooterComponent() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-brand-secondary h-96 relative">
        <div className="bg-brand w-3/5 absolute left-1/2 -translate-x-1/2 -top-1/2 rounded-xl flex flex-col content-center gap-4 px-8 py-14">
          <h3 className="text-5xl text-white text-center font-semibold">
            Newsletter
          </h3>
          <p className="text-xl text-white text-center">
            Subscribe to stay tuned for new offers and latest updates. Let's do
            it!
          </p>
          <div className="flex justify-center gap-4">
            <input
              type="text"
              className="w-1/4 rounded-md px-4"
              placeholder="Enter your email address"
            />
            <button className="bg-white text-brand px-8 py-4 font-medium rounded-md">
              Subscribe
            </button>
          </div>
        </div>
        <div className="xl:container xl:mx-auto pt-48">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col justify-between">
              <h1 className="text-3xl font-bold text-brand">SEA Salon</h1>
              <div className="flex justify-between">
                <a href="#">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="#">
                  <FacebookIcon fontSize="large" />
                </a>
                <a href="#">
                  <XIcon fontSize="large" />
                </a>
              </div>
            </div>
            <div className="">
              <h5 className="text-xl font-bold">Any question?</h5>
              <ul className="h-fit mt-2">
                <li className="text-lg">
                  <LocalPhone />: <span>08123456789</span>{" "}
                  <span className="font-bold">(Thomas)</span>
                </li>
                <li className="text-lg">
                  <LocalPhone />: <span>08164829372</span>{" "}
                  <span className="font-bold">(Sekar)</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="text-center mt-4">
            <span>Copyright &copy; 2024 SEA Salon</span>
          </div>
        </div>
      </footer>
      {/* End ofFooter */}
    </>
  );
}

export default FooterComponent;
