import { useState } from "react";
import logo from "../../assets/logo-white.png";
const Navigation = () => {
  const [isMenuShown, setIsMenuShow] = useState(true);
  const handleMenu = () => {
    setIsMenuShow(!isMenuShown);
  };
  return (
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
  );
};
export default Navigation;
