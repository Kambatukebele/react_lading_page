import { useState } from "react";
import logo from "./assets/logo-white.png";
function App() {
  const [isMenuShown, setIsMenuShow] = useState(true);
  const handleMenu = () => {
    setIsMenuShow(!isMenuShown);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero w-full bg-center bg-cover bg-no-repeat h-fit bg-blue-100 font-poppins lg:h-screen">
        <div className="container mx-auto px-4 h-fit lg:h-full lg:relative  xl:max-w-[1280px]">
          <nav className="flex justify-between items-center py-4 lg:absolute lg:top-0 lg:left-0 lg:w-full">
            {/* Logo */}
            <a className="lg:w-1/4" href="/">
              <img src={logo} alt="Logo site" />
            </a>
            {/* Navigation Menu */}
            <ul
              className={`${
                isMenuShown ? "-left-[1024px] top-0 " : "left-0 top-0 "
              }  bg-white duration-700 h-screen min-w-[75%] z-10 ease-in-out  absolute p-4 flex flex-col lg:left-0 lg:static lg:h-fit lg:flex-row lg:justify-between lg:bg-red-100 lg:bg-transparent lg:w-[600px]`}
            >
              <li className="text-base text-gray-500 font-normal my-2 lg:text-white">
                <a href="#">Home</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2 lg:text-white">
                <a href="#">Features</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2 lg:text-white">
                <a href="#">Pages</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2 lg:text-white">
                <a href="#">Screenshots</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2 lg:text-white">
                <a href="#">Pricing</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2 lg:text-white">
                <a href="#">Contact</a>
              </li>
            </ul>
            {/* Hamburger Menu and Close Menu for Small Devices */}
            <div className="bg-blue-400 flex justify-center items-center lg:hidden">
              {isMenuShown ? (
                <div
                  onClick={handleMenu}
                  className={`${
                    isMenuShown ? "cursor-pointer" : "hidden"
                  } duration-700`}
                >
                  <svg
                    width="44px"
                    height="44px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4 7L7 7M20 7L11 7"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M20 17H17M4 17L13 17"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M4 12H7L20 12"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              ) : (
                <div
                  onClick={handleMenu}
                  className={`${
                    isMenuShown
                      ? "hidden"
                      : "block cursor-pointer absolute z-20 top-5 right-5 my-1"
                  }duration-700`}
                >
                  <svg
                    width="34px"
                    height="34px"
                    viewBox="-0.5 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M3 21.32L21 3.32001"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M3 3.32001L21 21.32"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              )}
            </div>
            {/* END Hamburger Menu and Close Menu for Small Devices */}
          </nav>
          {/* Hero Text */}
          <div className="w-full lg:flex lg:justify-between lg:items-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            {/* Text Hero */}
            <div className="w-full h-fit mb-10 lg:w-1/2 ">
              <h1 className="text-[40px] text-white font-semibold capitalize lg:text-[72px] lg:leading-[77px] mb-5">
                Stay connected with your customers
              </h1>
              <p className="text-white font-normal capitalize mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur placeat est rerum maiores consequuntur modi voluptatem
                molestiae tenetur ipsa neque.
              </p>
              <button className="block w-[210px] h-[52px] bg-white rounded-full">
                <a
                  className="block uppercase text-gray-700 font-normal text-base"
                  href="#"
                >
                  Start free trail
                </a>
              </button>
            </div>
            <form
              action=""
              className="bg-white py-6 px-6 w-full rounded sm:px-10 md:max-w-[450px] mx-auto lg:mx-0 xl:max-w-[550px] xl:px-20"
            >
              <div className="w-full">
                <div className="h-fit mb-5">
                  <h3 className="text-[28px] mb-5 font-semibold text-center">
                    Get started for <span className="uppercase">Free</span>
                  </h3>
                  <p className="text-base font-normal text-gray-400 mb-5 text-center">
                    Fill all fields so we can get some info about you. We'll
                    never send you spam
                  </p>
                </div>
                <div className="w-full mb-5">
                  <input
                    className="w-full shadow-lg rounded-sm h-[50px] pl-4 mb-5"
                    type="text"
                    name="name"
                    placeholder="Name"
                    id="name"
                  />
                  <input
                    className="w-full shadow-lg rounded-sm h-[50px] pl-4 mb-5"
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                  />
                  <input
                    className="w-full shadow-lg rounded-sm h-[50px] pl-4 mb-5"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                  />
                </div>
                <div className="w-full mb-5">
                  <button className="w-full bg-purple-800 text-white rounded-lg shadow-2xl h-[50px] pl-4">
                    Send Message
                  </button>
                </div>
                <div>
                  <p className="text-base text-gray-400 text-center">
                    By signing up, you accept our
                    <a href="#">Terms</a>&<a href="#">Privacy Policy</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* END Hero Section */}
    </>
  );
}

export default App;
