import ClientSlider from "./ClientSlider"

const Clients = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto md:py-5 px-2 lg:px-[50px]">

            <h1 className="leading-snug md:leading-loose max-w-[300px] md:max-w-[400px] text-2xl md:text-3xl text-[#e3e4e6a4]">Some of the
                 <span className="text-white font-bold"> clients I have
                        designed for </span> </h1>

          <ClientSlider/>
      </div>
       
    </section>
  )
}

export default Clients
