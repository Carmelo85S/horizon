import { faGithub, faLinkedin, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../style/footer/footer.css';

const Footer = () => {
    return (
        <section className="footer-wrapper">
            <section className="footer-container">
                <h2 className="footer-heading">Horizon</h2>
                <p className="footer-info">
                    Safe travel anywhere
                </p>
                <section className="icon-container">
                <a href="https://github.com/carmelo85s" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/carmelo-salis-7726ba298/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                </a>
                    <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
                    <FontAwesomeIcon className="icon" icon={faWhatsapp} size="2x" />
                </section>
            </section>
        </section>
    )
}
export default Footer
