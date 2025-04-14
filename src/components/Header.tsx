import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        {" "}
        <h1 className="header-text">Leon Volbers</h1>
      </Link>
    </div>
  );
};

export default Header;
