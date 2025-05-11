import { Link } from "react-router-dom";
const Footer = () => {
  return <div className="footer">
    <p>Leon Volbers ©2025</p>

    <Link to={`/impressum`}>Impressum</Link>
    
    </div>;
};

export default Footer;
