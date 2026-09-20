import Logo from '../../assets/logo-text.png'
import './Footer.css'
const Footer = () => {
    return (
       <footer className="bg-white border-2 border-gray-100 ">
        <div  className="footer-top">
            <div className='w-75'>
                <img src={Logo} alt="Dev Stack" />
            
                <p className='footer-dis'>Curated tools, technologies, and resources for 
                    developers building
                   modern software.</p>
                   <ul className='footer-social'>
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

            <div >
                <h2 className='footer-productt'>PRODUCT</h2>
            
                <ul className='footer-ul'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
            </div>


            <div>
                <h2 className='footer-productt'>COMPANY</h2>
                <ul className='footer-ul'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>

            </div>
            <div>
                <h2 className='footer-productt'>LEGAL</h2>
                <ul className='footer-ul'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                   
                </ul>

            </div>
        </div>
       </footer>
    );
};

export default Footer;