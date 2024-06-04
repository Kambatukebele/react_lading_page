const Content = () => {
  return (
    <div className="w-full lg:flex lg:justify-between lg:items-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
      {/* Text Hero */}
      <div className="w-full h-fit mb-10 lg:w-1/2 ">
        <h1 className="text-[40px] text-white font-semibold capitalize lg:text-[72px] lg:leading-[77px] mb-5">
          Stay connected with your customers
        </h1>
        <p className="text-white font-normal capitalize mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          placeat est rerum maiores consequuntur modi voluptatem molestiae
          tenetur ipsa neque.
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
              Fill all fields so we can get some info about you. We'll never
              send you spam
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
  );
};
export default Content;
