export default function H2text(props) {
  return (
    <>
      {" "}
      <h2 className="text-[32px] leading-[48px] font-semibold text-black md:text-4xl lg:text-5xl lg:leading-[62px]">
        {props.children}
      </h2>
    </>
  );
}
