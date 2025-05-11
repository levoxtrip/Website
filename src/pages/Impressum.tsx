
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackBtn from "../components/BackBtn";
import { useEffect } from "react";
const Impressum = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <BackBtn to={"/"} text={"←"} />
      <h1 className="proj-title">Impressum</h1>
      <p className="proj-description">
      Leon Volbers<br/>
      Carrer de Lopez Catalan 3, 4,1<br/>
      08014 Barcelona<br/>
        <a href="mailto:leon.volbers@gmail.com">
          leon.volbers@gmail.com
        </a>

      </p>
      <Footer />
    </div>
  );
};

export default Impressum;
