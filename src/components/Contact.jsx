import Mail from '../assets/img/mail.png'
import Behance from '../assets/img/behance.png'
import Dribble from '../assets/img/dribble.png'
import LinkedIn from '../assets/img/linkedin.png'

const Contact = () => {
  return (
    <section className="my-10" id='contact'>
        <div className="container mx-auto text-center text-white">
            <h1 className="text-[#ffffffa9] text-3xl md:text-4xl my-5">Get <span className="text-white font-bold"> in Touch. </span></h1>
            <p className="md:text-xl text-sm text-[#ffffffa9]">So that we can talk more about...</p>
            <div className='max-w-[300px] flex items-center justify-center gap-10 mx-auto my-10'>
                <img src={Mail} alt="contact" className='cursor-pointer hover:scale-105 duration-300'/>
                <img src={Behance} alt="contact" className='cursor-pointer hover:scale-105 duration-300'/>
                <img src={Dribble} alt="contact" className='cursor-pointer hover:scale-105 duration-300'/>
                <img src={LinkedIn} alt="contact" className='cursor-pointer hover:scale-105 duration-300'/>
            </div>
            <p className='text-center text-[16px] md:text-[18px] text-[#ffffff79]'>Made with ❣️ by <span className='font-bold text-white'>Echo</span></p>
        </div>
    </section>
  )
}

export default Contact
