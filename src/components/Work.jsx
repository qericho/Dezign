
const Work = (props) => {
  return (
    <div>
        <div className="w-full my-10">
                <div className={`flex justify-between gap-5 xl:flex-row flex-col ${props.swap ? "xl:flex-row-reverse" : " "}`}>
                    <img src={props.work1} alt="" sizes='100' className='aspect-auto'/>
                    <div className={`w-full h-full text-start pt-0 xl:pt-[200px] ${props.swap ? " " : " "}`}>
                        <h4 className='text-[15px] md:text-[18px] font-bold text-[#e3e4e6c9]'>{props.title}</h4>
                        <p className='max-w-[600px] text-2xl md:text-3xl leading-tight my-4 md:my-5 text-[#e3e4e6a4]'>{props.des}<span className='font-bold text-white'>{props.desBold}</span></p>
                        <p className='text-[16px] md:text-[17px] my-3 md:my-5 text-[#e3e4e6a4]'>{props.type}</p>
                        <button className='rounded-full border px-7 md:px-10 py-1 cursor-pointer text-sm md:text-lg'>VIEW WORK</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Work
