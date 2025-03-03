import About1 from '../assets/img/about1.png'
import About2 from '../assets/img/about2.png'
import About3 from '../assets/img/about3.png'

const About = () => {
  return (
    <section id='about' className='w-full my-[100px] md:my-[200px]'>
        <div className="container mx-auto text-white px-2 lg:px-[50px]">
            <div className="w-full flex lg:flex-row flex-col-reverse justify-center items-center gap-10">
                <div>
                    <h4 className="text-2xl md:text-3xl uppercase my-3 md:my-5 text-[#ffffffd0]">A bit about me</h4>
                    <p className="text-[#e3e4e6a4] text-[22px] md:text-3xl max-w-[700px] leading-snug">I am a UI/UX designer who is passionate about creating 
                     <span className="text-white font-bold"> beautiful and joyful digital experiences. Besides design, I love music, games and travelling. </span> </p>
                </div>
                <div className='flex items-center gap-2 md:gap-5'>
                    <div>
                        <img src={About2} alt="2" />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-5'>
                        <img src={About1} alt="1" />
                        <img src={About3} alt="3" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
