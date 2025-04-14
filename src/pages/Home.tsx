import T3WelcomeCanvas2 from "../components/T3WelcomeCanvas2";

import ProjectsPage from "./ProjectsPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroSections from "../components/IntroSections.tsx";
import EISInteractiveCanvas from "../components/EISInteractiveCanvas";
import DisplaceGridHand from "../components/DisplaceGridHand";
import ZoomIntoLaptopShiftSpace from "../components/ZoomIntoLaptopShiftSpace";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <ZoomIntoLaptopShiftSpace /> */}
      {/* <EISInteractiveCanvas /> */}
      {/* <DisplaceGridHand /> */}
      <T3WelcomeCanvas2 />
      <IntroSections />
      {/* <ProjectsPage /> */}
      <Footer />
    </div>
  );
};

export default Home;
