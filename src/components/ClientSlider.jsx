import Marquee from "react-fast-marquee"
import Img1 from '../assets/img/1.png'
import Img2 from '../assets/img/2.png'
import Img3 from '../assets/img/3.png'
import Img4 from '../assets/img/4.png'
const ClientSlider = () => {
  return (
    <div className="my-20 w-full">
        <Marquee pauseOnHover speed={100}>
            <div className="mx-[30px] md:mx-[100px]">
                <img src={Img1} alt="" className="w-[60%] md:w-[80%]"/>
            </div>
            <div className="mx-[30px] md:mx-[100px]">
                <img src={Img2} alt="" className="w-[60%] md:w-[80%]"/>
            </div>
            <div className="mx-[30px] md:mx-[100px]">
                <img src={Img3} alt="" className="w-[60%] md:w-[80%]"/>
            </div>
            <div className="mx-[30px] md:mx-[100px]">
                <img src={Img4} alt="" className="w-[60%] md:w-[80%]"/>
            </div>
        </Marquee>
    </div>
  )
}

export default ClientSlider
