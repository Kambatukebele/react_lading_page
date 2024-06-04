export const IconCard = (props) => {
  console.log(props.icon);
  return (
    <>
      <div className="w-14 h-auto my-5">
        <img
          className="w-full h-full object-cover object-center"
          src={props.icon}
          alt={props.title}
        />
      </div>
    </>
  );
};
