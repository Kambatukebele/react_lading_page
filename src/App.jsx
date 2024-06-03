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
              <button className="block w-[210px] h-[52px] bg-white rounded-full hover:bg-gradient-to-r from-purple-500 to-pink-500 ">
                <a
                  className="block uppercase text-gray-700 hover:text-white font-normal text-base"
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
      {/* Premium Features */}
      <section className="w-full h-fit">
        <div className="container mx-auto px-4 xl:max-w-[1280px]">
          <div className="flex justify-start items-center my-10 px-4 py-2 rounded-full w-52 shadow-xl">
            <div>
              <svg
                class="svg-inline--fa fa-lightbulb fa-w-11 text-primary mr-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="lightbulb"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                data-fa-i2svg=""
                width="16px"
                color="#6d36e1"
              >
                <path
                  fill="currentColor"
                  d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
                ></path>
              </svg>
            </div>
            <div className="text-black text-base leading-6 font-medium">
              <span className="mr-1 text-purple-800">Premium</span>Features
            </div>
          </div>
        </div>
      </section>
      {/* END Premium Features */}
      {/* Express Functionality section */}
      <section className="w-full h-fit mb-10">
        <div className="container mx-auto px-4 xl:max-w-[1280px]">
          <h2 className="text-[32px] leading-[48px] font-semibold text-black md:text-4xl lg:text-5xl lg:leading-[62px]">
            Express Functionality
          </h2>
          <span className="block w-10 border border-purple-700 my-3"></span>
          <p className="text-base leading-6 font-normal text-gray-400 md:w-[500px] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            aperiam eligendi ut voluptate ipsum amet sapiente tempore eos,
            officia consequatur.
          </p>
        </div>
      </section>
      {/* END Express Functionality section */}
      {/* Cards */}
      <section className="w-full h-fit mb-10">
        <div className="container mx-auto px-4 md:grid md:gap-4 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:max-w-[1280px]">
          <div className="flex flex-col justify-center items-center shadow-xl py-5 px-4 h-fit rounded-2xl w-full sm:max-w-[600px] mx-auto md:h-[280px]">
            <div className="my-2">icon</div>
            <h3 className="text-2xl leading-9 text-black font-semibold text-center mb-3">
              Fully functional
            </h3>
            <p className="text-center text-base leading-6 font-normal text-gray-500 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              eligendi?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-xl py-5 px-4 h-fit rounded-2xl w-full sm:max-w-[600px] mx-auto md:h-[280px]">
            <div className="my-2">icon</div>
            <h3 className="text-2xl leading-9 text-black font-semibold text-center mb-3">
              Fully functional
            </h3>
            <p className="text-center text-base leading-6 font-normal text-gray-500 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              eligendi?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-xl py-5 px-4 h-fit rounded-2xl w-full sm:max-w-[600px] mx-auto md:h-[280px]">
            <div className="my-2">icon</div>
            <h3 className="text-2xl leading-9 text-black font-semibold text-center mb-3">
              Fully functional
            </h3>
            <p className="text-center text-base leading-6 font-normal text-gray-500 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              eligendi?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-xl py-5 px-4 h-fit rounded-2xl w-full sm:max-w-[600px] mx-auto md:h-[280px]">
            <div className="my-2">icon</div>
            <h3 className="text-2xl leading-9 text-black font-semibold text-center mb-3">
              Fully functional
            </h3>
            <p className="text-center text-base leading-6 font-normal text-gray-500 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              eligendi?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-xl py-5 px-4 h-fit rounded-2xl w-full sm:max-w-[600px] mx-auto md:h-[280px]">
            <div className="my-2">icon</div>
            <h3 className="text-2xl leading-9 text-black font-semibold text-center mb-3">
              Fully functional
            </h3>
            <p className="text-center text-base leading-6 font-normal text-gray-500 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              eligendi?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-xl py-5 px-4 h-fit rounded-2xl w-full sm:max-w-[600px] mx-auto md:h-[280px]">
            <div className="my-2">icon</div>
            <h3 className="text-2xl leading-9 text-black font-semibold text-center mb-3">
              Fully functional
            </h3>
            <p className="text-center text-base leading-6 font-normal text-gray-500 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              eligendi?
            </p>
          </div>
        </div>
      </section>
      {/* END Cards */}
      {/*  */}
    </>
  );
}

export default App;
