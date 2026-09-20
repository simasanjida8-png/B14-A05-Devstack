import Logo from '../../assets/logo-text.png'

const Navbar = () => {
    return (
       <nav className="pt-6 bg-[#FFFFFF] ">
        <div className="  container mx-auto flex justify-between items-center">
            <div>
                <a href="#">
                    <img src={Logo} alt="Dev Stack" />
                </a>
            </div>
           
                <ul className='flex justify-center items-center gap-5'>
                <li>
                    <span className='text-[#DB2777]'>
                        <a href="#">Home</a>
                    </span>
                </li>
                <li>
                    <a href="#">Technologies</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
               <li>
                 <a href="#">About</a>
               </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                </ul>
            
            <div className=' flex gap-5'>
                <button>Sign In</button>
                <button className='border-transparent rounded-[25px] px-5 py-2.5  bg-[#DB2777] text-[#FFFFFF]'>Sign Up</button>
                </div>
        </div>
       </nav>
         
      
    );
};

export default Navbar;