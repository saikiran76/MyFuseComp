import edu from "../assets/edu.png"
import eng from "../assets/eng.png"
import tec from "../assets/tec.png"
import ret from "../assets/ret.png"
import log from "../assets/log.png"
import tr from "../assets/tr.png"
import hl from "../assets/hl.png"
import fin from "../assets/fin.png"
import { Slide } from "react-awesome-reveal"

const Categories = () =>{
    return(
        <div className="cat h-full">
            <Slide direction="down" triggerOnce><h1 className="text-center text-3xl bg-gradient-to-br from-purple-900 to-black px-9 py-9 text-white shadow-lg">Top Categories</h1></Slide>
            
        <div className="categories-conteiner flex flex-wrap flex-row justify-center items-center gap-6 bg-gradient-to-br from-purple-900 to-black py-12 ">
            <div className="w-64 h-64 bg-purple-400 text-2xl rounded-md text-center py-5 bg-opacity-70 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 relative">
                <img src={edu} className="absolute"></img>
                <h1 className="mx-auto left-0 right-0 absolute text-white">Education</h1>

            </div>

            <div className="w-64 h-64 bg-purple-400 text-2xl rounded-md text-center py-5 bg-opacity-50 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 relative" >
                <img src={eng} className="absolute"></img>
                <h1 className="mx-auto left-0 right-0 absolute text-white">Engineering</h1>

            </div>

            <div className="w-64 h-64 bg-purple-400 text-2xl rounded-md text-center py-5 bg-opacity-50 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 relative">
                <img src={tec} className="absolute"></img>
                <h1 className="mx-auto left-0 right-0 absolute text-white">Tech & IT </h1>


            </div>
            <div className="w-64 h-64 bg-purple-400 text-2xl rounded-md text-center py-5 bg-opacity-50 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 relative">
                <img src={ret} className="absolute"></img>
                <h1 className="mx-auto left-0 right-0 absolute text-white">Retail</h1>

            </div>

            
        </div>
        </div>
    )
}

export default Categories;


