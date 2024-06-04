import H2text from "../H2text";
import Ptext from "../Ptext";
const Communication = () => {
  return (
    <section className="w-full h-fit bg-gray-100">
      <div className="container mx-auto px-4 py-10 xl:max-w-[1280px]">
        {/* <image /> */}
        <div>
          <H2text>Easily communicate with clients using sApp.</H2text>
          <Ptext>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            dolor ut iusto vitae autem neque eum ipsam.
          </Ptext>
          <div className="flex justify-between items-center my-3">
            <span className="block mr-2">
              <svg
                class="svg-inline--fa fa-check fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="check"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
                width="16"
                color="rgba(81,45,213,0.9)"
              >
                <path
                  fill="currentColor"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                ></path>
              </svg>
            </span>
            <span className="block text-gray-500 text-start text-base leading-6 font-normal">
              Combined with a handful of model sentence structures looks
              reasonable.
            </span>
          </div>
          <div className="flex justify-start items-center gap-3 my-3">
            <div className="w-14 h-14 border flex justify-center item-center rounded-sm bg-white shadow-lg">
              <svg
                class="svg-inline--fa fa-bell fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
                width="20"
                color="rgba(81,45,213,0.9)"
              >
                <path
                  fill="currentColor"
                  d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                ></path>
              </svg>
            </div>
            <div className="w-14 h-14 border flex justify-center item-center rounded-sm bg-white shadow-lg">
              <svg
                class="svg-inline--fa fa-bell fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
                width="20"
                color="rgba(81,45,213,0.9)"
              >
                <path
                  fill="currentColor"
                  d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                ></path>
              </svg>
            </div>
            <div className="w-14 h-14 border flex justify-center item-center rounded-sm bg-white shadow-lg">
              <svg
                class="svg-inline--fa fa-bell fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
                width="20"
                color="rgba(81,45,213,0.9)"
              >
                <path
                  fill="currentColor"
                  d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Communication;
