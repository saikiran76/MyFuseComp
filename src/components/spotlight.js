import de from '../assets/de.png'
function Spotlight() {
    return (
      <div className="flex flex-col justify-center text-white bg-neutral-700">
        <div className="flex flex-col justify-center w-full bg-zinc-50 max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-start px-14 py-12 w-full min-h-[430px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src={de}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex overflow-hidden relative flex-col items-start py-16 pr-20 pl-9 max-w-full backdrop-blur-none min-h-[335px] w-[900px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ce6200578acbf5f9baa48460b5be32ba47779ca3212a0603b478f2d02d44be?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative mt-5 text-4xl font-extrabold text-black max-md:max-w-full">
              UNLOCKING YOUR PROFESSIONAL FUTURE:
              </div>
              <div className="relative mt-1.5 text-2xl mix-blend-hard-light max-md:max-w-full">
              In the fast-paced and competitive job market, students face the challenge of not only excelling academically but also becoming employable even before graduation.
              </div>

              <button className="justify-center p-4 mt-12 text-xl bg-gradient-to-r from-indigo-500 via-blue-400 to-indigo-500 rounded-md transition duration-300 hover:bg-lime-500 text-center cursor-pointer w-28 md:text-yellow-500">
                    Read more
                </button>



              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Spotlight;
