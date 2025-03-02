import Work1 from '../assets/img/work1.png'
import Work2 from '../assets/img/work2.png'
import Work3 from '../assets/img/work3.png'
import Work from './Work'
const Works = () => {
  return (
    <section id='works' className="w-full h-full text-white my-10">
        <div className="container mx-auto px-2 lg:px-[50px]">
            <h1 className="text-2xl md:text-3xl text-[#e3e4e6a4]">Select <span className="text-white font-bold">Work</span></h1>
            <Work 
            work1={Work1}
            title="Real estate Template" 
            des="Lorem ipsum dolor sit amet, consectetur" 
            desBold=" adipiscing elit. Ultrices lorem non feugiat egestas amet."
            type="Website Design"/>
            <h1 className='max-w-[1100px] mx-auto text-2xl md:text-3xl leading-snug my-10 md:my-20 text-[#e3e4e6a4]'>
                Lorem ipsum dolor sit amet, consectetur
                <span className='text-white'> adipiscing elit. Ultrices lorem non feugiat egestas amet.</span></h1>
            <Work 
            work1={Work2}
            title="Smart Home App" 
            des="Lorem ipsum dolor sit amet, consectetur" 
            desBold=" adipiscing elit. Ultrices lorem non feugiat egestas amet."
            type="Mobile App"/>
            <Work
             swap={true}
            work1={Work3}
            title="Logo Animation" 
            des="Lorem ipsum dolor sit amet, consectetur" 
            desBold=" adipiscing elit. Ultrices lorem non feugiat egestas amet."
            type="Animation"/>
        </div>
    </section>
  )
}

export default Works
