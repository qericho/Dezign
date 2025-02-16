import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
const Hero = () => {
  const [arrow, setArrow] = useState(true);
  useEffect(() => {
    const arrowOpacity = () =>{
      if(window.scrollY >= 200){
        setArrow(false);
      }else{
        setArrow(true);
      }
    }
    window.addEventListener('scroll', arrowOpacity)
    return () => window.removeEventListener("scroll", arrowOpacity);
  },[])
  return (
    <section className="w-full h-screen" id="home">
      <div className="container h-full mx-auto flex items-center justify-center text-white md:py-5 px-2 lg:px-[50px]">
            <h1 className="max-w-[850px] text-2xl md:text-5xl text-center leading-snug text-[#e3e4e6a4]">
                I’m a designer specialising in 
                <span className="font-bold text-white"> UI/UX </span> and 
                <span className="font-bold text-white"> Interaction Design</span></h1>
                <a href="#works" className={`text-2xl md:text-3xl absolute bottom-5 animate-bounce cursor-pointer
                   ${arrow ? 'opacity-100 duration-500' 
                           : "opacity-0 duration-500"}`}>
                  <SlArrowDown />
                </a>
      </div>
     
    </section>
  )
}

export default Hero
