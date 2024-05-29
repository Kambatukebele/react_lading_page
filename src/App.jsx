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
      <section className="w-full h-screen bg-blue-100 font-poppins relative">
        <div className="container mx-auto px-4 h-fit">
          <nav className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/">
              <img src={logo} alt="Logo site" />
            </a>
            {/* Navigation Menu */}
            <ul
              className={`${
                isMenuShown
                  ? "hidden"
                  : "bg-red-50 p-4 flex flex-col w-full  h-screen absolute top-0 left-0 bottom-0 z-10"
              }`}
            >
              <li className="text-base text-gray-500 font-normal my-2">
                <a href="#">Home</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2">
                <a href="#">Features</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2">
                <a href="#">Pages</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2">
                <a href="#">Screenshots</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2">
                <a href="#">Pricing</a>
              </li>
              <li className="text-base text-gray-500 font-normal my-2">
                <a href="#">Contact</a>
              </li>
            </ul>
            {/* Hamburger Menu and Close Menu for Small Devices */}
            <div className="bg-blue-400 flex justify-center items-center">
              {isMenuShown ? (
                <div
                  onClick={handleMenu}
                  className={`${
                    isMenuShown ? "cursor-pointer bg-yellow-400" : "hidden"
                  }`}
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
                      : "block cursor-pointer absolute z-20 top-0 right-0 my-1 mr-2"
                  }`}
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
          <div className="hidden">
            {/* Text Hero */}
            <div>
              <h1>Stay connected with your customers</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur placeat est rerum maiores consequuntur modi voluptatem
                molestiae tenetur ipsa neque.
              </p>
              <button>
                <a href="#">Start free trail</a>
              </button>
            </div>
            <form action="">
              <div>
                <div>
                  <h3>
                    Get started for <span>Free</span>
                  </h3>
                  <p>
                    Fill all fields so we can get some info about you. We'll
                    never send you spam
                  </p>
                </div>
                <div>
                  <input type="text" name="name" placeholder="Name" id="name" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                  />
                </div>
                <div>
                  <button>Send Message</button>
                </div>
                <div>
                  <p>
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
