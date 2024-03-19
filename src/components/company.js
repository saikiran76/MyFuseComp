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
            <img src="https://www.myfuse.in/uploads/logo/sw.png" />
            </swiper-slide>
            <swiper-slide>
            <img src="https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%202.06.14%20PM.png"/>
            </swiper-slide>
            <swiper-slide>
            <img src="https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%201.05.00%20PM.png" />
            </swiper-slide>
            <swiper-slide>
            <img src="https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%202.00.31%20PM.png"  />
            </swiper-slide>
            <swiper-slide>
            <img src="https://www.myfuse.in/uploads/logo/Screenshot%202023-09-30%20at%201.25.19%20PM.png"  />
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
    </div>
    )
}

export default Company;