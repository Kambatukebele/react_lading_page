const Ptext = (props) => {
  return (
    <>
      <p className="text-base leading-6 font-normal text-gray-400 md:w-[500px] ">
        {props.children}
      </p>
    </>
  );
};

export default Ptext;
