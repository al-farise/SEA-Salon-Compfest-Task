import MenuIcon from "@mui/icons-material/Menu";
import LocalPhone from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import image1 from "./assets/images/image_1.jpg";
import image2 from "./assets/images/image_2.jpg";
import image3 from "./assets/images/image_3.jpg";
import image4 from "./assets/images/image_4.jpg";
import team1 from "./assets/images/team-1.jpg";
import team2 from "./assets/images/team-2.jpg";
import team3 from "./assets/images/team-3.jpg";
import team4 from "./assets/images/team-4.jpg";
import team5 from "./assets/images/team-5.jpg";

function App() {
  const services = [
    {
      image: image1,
      name: "Facial Treatments",
    },
    {
      image: image2,
      name: " Haircuts and Styling",
    },
    {
      image: image3,
      name: "Manicure and Pedicure",
    },
  ];

  const experts = [
    {
      image: team1,
      name: "Lori",
    },
    {
      image: team2,
      name: "Alex",
    },
    {
      image: team3,
      name: "Rose",
    },
    {
      image: team4,
      name: "Mark",
    },
    {
      image: team5,
      name: "Amy",
    },
  ];

  return (
    <>
      {/* Navigation Menu */}
      <nav className="w-full">
        <div className="xl:container xl:mx-auto flex justify-between items-center py-4 px-2 xl:px-0">
          <h1 className="text-3xl font-bold text-brand">SEA Salon</h1>
          <button className="md:hidden">
            <MenuIcon className="text-brand" fontSize="large" />
          </button>
          <ul className="md:flex justify-between h-fit hidden">
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
          <div className="hidden md:block">
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

      {/* Hero */}
      <div className="xl:container xl:mx-auto bg-brand rounded-3xl xl:h-[840px] overflow-hidden relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-12 max-w-xl">
          <h2 className="text-6xl text-brand font-bold h-fit ">
            Beauty and Elegance Redefined
          </h2>
          <p className="text-xl text-brand font-semibold my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            obcaecati quisquam natus et.
          </p>
          <button className="bg-brand text-white px-8 py-4 font-medium rounded-md">
            Book Appointment
          </button>
        </div>
        <img src={image1} alt="Hero Image" className="object-cover w-full" />
      </div>
      {/* End of Hero */}

      {/* Our Service Section */}
      <div className="xl:container xl:mx-auto my-32">
        <div className="text-center xl:w-1/2 mx-auto">
          <h2 className="text-6xl text-brand font-bold">Our Service</h2>
          <p className="text-xl mt-4">
            Fugit, aut voluptates. Quam ut consequuntur sequi corrupti, error
            vero! Maiores enim, iusto repellendus architecto dolorum non.
            Molestias a est voluptates eos.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-y-8">
          {services.map((service) => {
            return (
              <div className="w-1/3 xl:w-[480px] rounded-2xl overflow-hidden relative">
                <div className="absolute top-0 left-0 bg-gray-400 w-full h-full opacity-65"></div>
                <h5 className="absolute top-1/2 -translate-y-1/2 w-full text-center text-brand text-4xl font-bold">
                  {service.name}
                </h5>
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-fill"
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* End of Our Service Section */}

      {/* Why Chose Us Section */}
      <div className="bg-brand-secondary py-36">
        <div className="xl:container xl:mx-auto flex justify-between gap-x-12">
          <div className="w-1/2">
            <img src={image4} alt="Why Chose Us" className="rounded-xl" />
          </div>
          <div className="w-1/2">
            <h2 className="text-6xl text-brand font-bold">Why Chose Us?</h2>
            <p className="text-xl my-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus assumenda non temporibus dolore voluptatibus iure,
              explicabo obcaecati! Quisquam, rem alias blanditiis nesciunt ipsa,
              nulla in inventore eligendi sit omnis dolore.
            </p>
            <button className="bg-brand text-white px-8 py-4 font-medium rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* End of Chose Us Section */}

      {/* Meet Our Experts Section */}
      <div className="xl:container xl:mx-auto my-32 h-[640px]">
        <div className="text-center xl:w-1/2 mx-auto">
          <h2 className="text-6xl text-brand font-bold">Meet Our Experts</h2>
          <p className="text-xl mt-4">
            Fugit, aut voluptates. Quam ut consequuntur sequi corrupti, error
            vero! Maiores enim, iusto repellendus architecto dolorum non.
            Molestias a est voluptates eos.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-around gap-y-8">
          {experts.map((expert) => {
            return (
              <div>
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-solid border-brand">
                  <img
                    src={expert.image}
                    alt="Hair Cut"
                    className="object-cover h-60"
                  />
                </div>
                <h5 className="mt-4 w-full text-center text-brand text-4xl font-bold">
                  {expert.name}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
      {/* End of Meet Our Experts Section */}

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

export default App;
