import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="px-45 py-25 " >
      

         <div className="flex items-center justify-between" >
            
      {/* left-side */}

        {/* all tags here */}
        <div className="w-[55%]  ">
        <h1 className=" max-w-xl text-[60px] texr-lg font-bold">Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
        

        <p className="text-[20px] py-8">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        
       

        <div className=" flex gap-5">
          <button className=" rounded-lg  text-[#FFFFFF] bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 "> Explore Technologies </button>
          <button className="rounded-lg border border-gray-400 px-12 py-3 ">Learn More</button>
        </div>
       </div>

      {/* right-side */}

         <div>
        
        <img  src={BannerImg} alt=" Development Stack" className=" bg-right object-contain " />
       </div>


      </div>

      

    </section>
  );
};

export default Banner;
