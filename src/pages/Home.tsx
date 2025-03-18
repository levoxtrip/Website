import T3WelcomeCanvas from "../components/T3WelcomeCanvas";

import ProjectsPage from "./ProjectsPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EISInteractiveCanvas from "../components/EISInteractiveCanvas";
import DisplaceGridHand from "../components/DisplaceGridHand";
import ZoomIntoLaptopShiftSpace from "../components/ZoomIntoLaptopShiftSpace";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <ZoomIntoLaptopShiftSpace /> */}
      <EISInteractiveCanvas />
      {/* <DisplaceGridHand /> */}
      {/* <T3WelcomeCanvas /> */}
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default Home;
