import * as React from "react";
import comp from "../assets/comp.png"
import * as React from "react";

function Challenge() {
  return (
    <div className="flex flex-col justify-center text-white bg-neutral-700">
      <div className="flex flex-col justify-center w-full bg-zinc-50 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-start px-14 py-12 w-full min-h-[430px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2be6c2e147067297934ff77d6d50c36d22341b9b64ac332f1b086fb36a51e245?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2be6c2e147067297934ff77d6d50c36d22341b9b64ac332f1b086fb36a51e245?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2be6c2e147067297934ff77d6d50c36d22341b9b64ac332f1b086fb36a51e245?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2be6c2e147067297934ff77d6d50c36d22341b9b64ac332f1b086fb36a51e245?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2be6c2e147067297934ff77d6d50c36d22341b9b64ac332f1b086fb36a51e245?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2be6c2e147067297934ff77d6d50c36d22341b9b64ac332f1b086fb36a51e245?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2be6c2e147067297934ff77d6d50c36d22341b9b64ac332f1b086fb36a51e245?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2be6c2e147067297934ff77d6d50c36d22341b9b64ac332f1b086fb36a51e245?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex overflow-hidden relative flex-col items-start py-16 pr-20 pl-9 max-w-full backdrop-blur-none min-h-[335px] w-[766px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ce6200578acbf5f9baa48460b5be32ba47779ca3212a0603b478f2d02d44be?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative mt-5 text-4xl font-extrabold text-black max-md:max-w-full">
              Re-imagine MyFuse
            </div>
            <div className="relative mt-1.5 text-2xl mix-blend-hard-light max-md:max-w-full">
              Design and Code Competition
            </div>
            <div className="relative mt-7 text-2xl max-md:max-w-full">
              Design your Future, Code your Success..
              <br />
            </div>
            <div className="relative justify-center px-5 py-2.5 mt-5 text-base bg-red-800 max-md:pr-5">
              Registration Ended
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;