const Image = (props) => {
  return (
    <div className="w-full lg:w-1/2">
      <img
        className="w-full h-full object-cover object-center"
        src={props.img}
        alt=""
      />
    </div>
  );
};
export default Image;
