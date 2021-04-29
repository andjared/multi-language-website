import { FaFacebook, FaInstagram, FaBehanceSquare, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';



const ContactUs = () => {
    return (
        <div className="contact-us">
            <ul className="icons">
                <li><i><FaFacebook /> <a href={"https://www.facebook.com/Uredjenje-eksterijera-653299878424412/?ref=settings"} target="_blank" rel="noreferrer">Facebook</a></i></li>
                <li><i><FaInstagram /> <a href="https://www.instagram.com/bastaisvasta/?hl=sr" target="_blank" rel="noreferrer">Instagram</a></i></li>
                <li><i><FaBehanceSquare /><a href="https://www.behance.net/musmulica104166?fbclid=IwAR0JWTmHbbkSXMWf5sux4ac3fHH2tk0ttvZKfoTKmLJ9km1kEia2XAO7f9A" target="_blank" rel="noreferrer">Behance</a> </i></li>
                <li><i><FaLinkedin /><a href="https://www.linkedin.com/in/marjana-selakovic-259599177/?fbclid=IwAR0tK0LZLERgHK6305ZB6i_2oVnvkJRYWvuu0pK4fbNsZGswLzB9FuqeHjU" target="_blank" rel="noreferrer">Linkedin</a> </i></li>
                <li><i><FaYoutube /><a href="https://www.youtube.com/channel/UC7C3Gq-AndrYfkmJ5ZqsDUw/" target="_blank" rel="noreferrer">Youtube</a> </i></li>
                <li><i><FaEnvelope />musmulica1@gmail.com</i></li>
                <li><i><FaPhoneAlt />0616123173</i></li>

            </ul>

        </div>
    );
}

export default ContactUs
