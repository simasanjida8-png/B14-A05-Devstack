import Logo from '../../assets/logo-text.png'

const Footer = () => {
    return (
       <footer className="pt-6 bg-[#FFFFFF] ">
        <div  className="  container mx-auto flex justify-between items-center">
            <div>
                <img src={Logo} alt="Dev Stack" />
            
                <p>Curated tools, technologies, and resources for developers building
                   modern software.</p>
                   <ul className='flex justify-center items-center gap-5'>
                    <li>
                        <a href="#">GitHub</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">LinkedIn</a>
                    </li>
                   </ul>
            </div>

            <div>
                <h2>PRODUCT</h2>
            
                <ul>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
            </div>


            <div>
                <h2>COMPANY</h2>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>

            </div>
            <div>
                <h2>LEGAL</h2>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                   
                </ul>

            </div>
        </div>
       </footer>
    );
};

export default Footer;