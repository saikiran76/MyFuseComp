import challenge from "../assets/c1.jpeg";
import { Fade } from "react-awesome-reveal";

const Challenge = () => {
    return (
        <Fade cascade triggerOnce>
        <div className="flex flex-col items-center px-5 py-14 md:px-20 shadow-sm bg-gradient-to-br from-purple-900 to-black relative p-20 md:max-md:px-5">
            <div className="flex gap-5 items-center text-4xl font-semibold text-amber-300 whitespace-nowrap md:flex-wrap">
                <div className="flex-auto self-stretch">CHALLENGE</div>
            </div>
            <div className="mt-10 text-xl font-medium text-white max-md:mt-10 max-md:max-w-full text-center">
                Elevate your skills and embrace growth with our Regular Challenge – a
                daily journey to unlock your full potential.
            </div>
            <div className="md:mt-10 max-w-full bg-gradient-to-r from-[#093028] to-[#237a57] rounded border border-black border-solid blur-[0.5px] h-[250px] md:w-[90%] h-32 md:h-48 m-4">
                <img src={challenge} alt="challenge" />
            </div>
        </div>
        </Fade>
    );
}

export default Challenge;
