import logo from "../logo1.png"

const Company = () =>{
    return(
        <div>
            <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
        slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
        coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
            <swiper-slide>
            <img src={logo} alt="accenture"/>
            </swiper-slide>
            <swiper-slide>
            <img  />
            </swiper-slide>
            <swiper-slide>
            <img  />
            </swiper-slide>
            <swiper-slide>
            <img  />
            </swiper-slide>
            <swiper-slide>
            <img  />
            </swiper-slide>
            <swiper-slide>
            <img  />
            </swiper-slide>
            <swiper-slide>
            <img  />
            </swiper-slide>
            <swiper-slide>
            <img  />
            </swiper-slide>
            <swiper-slide>
            <img  />
            </swiper-slide>
        </swiper-container>
        <h2 className="text-center text-3xl m-2 font-['poppins'] font-extrabold bg-white">Company Spotlight</h2>
    </div>
    )
}

export default Company;