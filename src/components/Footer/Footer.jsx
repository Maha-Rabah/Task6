import './footer.css'
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter }
 from 'react-icons/fa';
import { SlSocialPintarest } from 'react-icons/sl';
// import Link from 'next/link';
import pic1 from '../../../public/pic1.webp'
import pic2 from '../../../public/pic2.webp'
import pic3 from '../../../public/pic3.webp'
import pic4 from '../../../public/pic4.webp'
import pic5 from '../../../public/pic5.webp'
import pic6 from '../../../public/pic6.webp'
import Image from 'next/image';


export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-con">
                <div className="col">
                    <h3>About us</h3>
                    <p className="text-footer">
                    Far far away,behind the word,far from the countries Vokalia and 
                    consonantia,there live the blind texts.
                    </p>
                    <h3>Connect</h3>
                    <div className="social">
                        <><FaFacebookF/></>
                        <><FaInstagram/></>
                        <><FaTwitter/></>
                        <><FaLinkedinIn/></>
                        <><SlSocialPintarest/></>
                        <><FaGoogle/></>
                    </div>
                </div>
                <div className="col">
                    <h3>Projects</h3>
                    <ul>
                        <li>Web Design</li>
                        <li>Html5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Gallery</h3>
                    <div className='footer-picture'>
                        <Image width={70} src={pic1} alt="" />
                        <Image width={70} src={pic2} alt="" />
                        <Image width={70} src={pic3} alt="" />
                        <Image width={70} src={pic4} alt="" />
                        <Image width={70} src={pic5} alt="" />
                        <Image width={70} src={pic6} alt="" />
                    </div>
                </div>
                <div className="col">
                    <h3>Contact</h3>
                    <ul className='info'>
                        <li>43 Raymouth Rd. Baltemoer, london 3910</li>
                        <li>+1(123)-456-7890</li>
                        <li>+1(123)-456-7890</li>
                        <li>info@mydomain.com</li>
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright &copy; 2023. All Right Reserved.--Designed With Love By Maha Rabah</p>
        </div>
    );
}