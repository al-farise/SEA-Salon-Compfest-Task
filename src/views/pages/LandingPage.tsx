import image1 from "@/assets/images/image_1.jpg";
import image2 from "@/assets/images/image_2.jpg";
import image3 from "@/assets/images/image_3.jpg";
import image4 from "@/assets/images/image_4.jpg";
import team1 from "@/assets/images/team-1.jpg";
import team2 from "@/assets/images/team-2.jpg";
import team3 from "@/assets/images/team-3.jpg";
import team4 from "@/assets/images/team-4.jpg";
import team5 from "@/assets/images/team-5.jpg";

import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

function LandingPage() {
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
      <NavbarComponent />
      {/* End of Navigation Menu */}

      {/* Hero */}
      <div className="xl:container xl:mx-auto xl:rounded-3xl xl:h-[840px] overflow-hidden relative">
        <div className="w-full h-full bg-gray-300 absolute top-0 left-0 opacity-70 md:hidden"></div>
        <div className="absolute top-1/2 -translate-y-1/2 md:left-12 max-w-xl p-4 md:px-0">
          <h2 className="text-3xl md:text-6xl text-brand font-bold h-fit ">
            Beauty and Elegance Redefined
          </h2>
          <p className="text-md md:text-xl text-brand font-semibold my-2 md:my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            obcaecati quisquam natus et.
          </p>
          <button className="bg-brand text-white px-8 py-4 lg:font-medium rounded-md">
            Book Appointment
          </button>
        </div>
        <img src={image1} alt="Hero Image" className="object-cover w-full" />
      </div>
      {/* End of Hero */}

      {/* Our Service Section */}
      <div className="xl:container mx-8 xl:mx-auto my-16 md:my-32">
        <div className="text-center xl:w-1/2 mx-auto">
          <h2 className="text-3xl md:text-6xl text-brand font-bold">
            Our Service
          </h2>
          <p className="text-md md:text-xl mt-4">
            Fugit, aut voluptates. Quam ut consequuntur sequi corrupti, error
            vero! Maiores enim, iusto repellendus architecto dolorum non.
            Molestias a est voluptates eos.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between gap-y-4 md:gap-8">
          {services.map((service, index) => {
            return (
              <div
                className="w-full lg:w-1/2 xl:w-1/3 rounded-2xl overflow-hidden relative"
                key={index}
              >
                <div className="absolute top-0 left-0 bg-gray-400 w-full h-full opacity-65"></div>
                <h5 className="absolute top-1/2 -translate-y-1/2 w-full text-center text-brand text-3xl lg:text-4xl font-bold">
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
      <div className="bg-brand-secondary lg:py-36">
        <div className="xl:container xl:mx-auto flex flex-col lg:flex-row justify-between gap-x-12 gap-y-8">
          <div className="w-full lg:w-1/2">
            <img src={image4} alt="Why Chose Us" className="lg:rounded-xl" />
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-0">
            <h2 className="text-3xl md:text-6xl text-brand font-bold">
              Why Chose Us?
            </h2>
            <p className="text-md md:text-xl my-8">
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
      <div className="xl:container xl:mx-auto my-16 md:my-32 h-fit mb-52 md:h-[920px] xl:h-[640px]">
        <div className="text-center xl:w-1/2 mx-auto">
          <h2 className="text-3xl md:text-6xl text-brand font-bold">
            Meet Our Experts
          </h2>
          <p className="text-md md:text-xl mt-4">
            Fugit, aut voluptates. Quam ut consequuntur sequi corrupti, error
            vero! Maiores enim, iusto repellendus architecto dolorum non.
            Molestias a est voluptates eos.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-around gap-y-8">
          {experts.map((expert, index) => {
            return (
              <div key={index}>
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
      <FooterComponent />
      {/* End of Footer */}
    </>
  );
}

export default LandingPage;
