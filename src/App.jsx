import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Home } from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Wcag from "./pages/Wcag";
import Perceivable from "./pages/wcag/Perceivable";
import Operable from "./pages/wcag/Operable";
import Understandable from "./pages/wcag/Understandable";
import Robust from "./pages/wcag/Robust";
import AlternativTillText from "./pages/wcag/perceivable/1-1";
import IckeTextbaseratInnehall from "./pages/wcag/perceivable/1-1-1";
import TidsbaseradMedia from "./pages/wcag/perceivable/1-2";
import Undertexter from "./pages/wcag/perceivable/1-2-2";
import Anpassningsbart from "./pages/wcag/perceivable/1-3";
import InformationOchRelationer from "./pages/wcag/perceivable/1-3-1";
import SensoriskaKannetecken from "./pages/wcag/perceivable/1-3-3";
import Urskiljbar from "./pages/wcag/perceivable/1-4";
import AnvandningAvFarg from "./pages/wcag/perceivable/1-4-1";
import Kontrast from "./pages/wcag/perceivable/1-4-3";
import ForandringAvTextstorlek from "./pages/wcag/perceivable/1-4-4";
import ResponsivDesign from "./pages/wcag/perceivable/1-4-10";
import KontrastIInnehall from "./pages/wcag/perceivable/1-4-11";
import TillgangligtViaTangentbord from "./pages/wcag/operable/2-1";
import Tangentbord from "./pages/wcag/operable/2-1-1";
import TillrackligtMedTid from "./pages/wcag/operable/2-2";
import AnfallOchFysiskaReaktioner from "./pages/wcag/operable/2-3";
import Navigeringsbar from "./pages/wcag/operable/2-4";
import Fokusordning from "./pages/wcag/operable/2-4-3";
import SyftetMedLank from "./pages/wcag/operable/2-4-4";
import SynligtFokus from "./pages/wcag/operable/2-4-7";
import Inmatningsmetoder from "./pages/wcag/operable/2-5";
import Malstorlek from "./pages/wcag/operable/2-5-8";
import Lasbarhet from "./pages/wcag/understandable/3-1";
import Forutsagbar from "./pages/wcag/understandable/3-2";
import InputAssistance from "./pages/wcag/understandable/3-3";
import Kompatibel from "./pages/wcag/robust/4-1";

function App() {
  const location = useLocation();
  const showSidebar =
    location.pathname === "/" || location.pathname.startsWith("/wcag");

  return (
    <div className="App">
      <Navbar />

      <div className="layout">
        {showSidebar && <Sidebar />}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

            <Route path="/wcag" element={<Wcag />}>
              <Route path="perceivable" element={<Perceivable />} />
              <Route path="perceivable/1-1" element={<AlternativTillText />} />
              <Route
                path="perceivable/1-1-1"
                element={<IckeTextbaseratInnehall />}
              />
              <Route path="perceivable/1-2" element={<TidsbaseradMedia />} />
              <Route path="perceivable/1-2-2" element={<Undertexter />} />
              <Route path="perceivable/1-3" element={<Anpassningsbart />} />
              <Route
                path="perceivable/1-3-1"
                element={<InformationOchRelationer />}
              />
              <Route
                path="perceivable/1-3-3"
                element={<SensoriskaKannetecken />}
              />
              <Route path="perceivable/1-4" element={<Urskiljbar />} />
              <Route path="perceivable/1-4-1" element={<AnvandningAvFarg />} />
              <Route path="perceivable/1-4-3" element={<Kontrast />} />
              <Route
                path="perceivable/1-4-4"
                element={<ForandringAvTextstorlek />}
              />
              <Route path="perceivable/1-4-10" element={<ResponsivDesign />} />
              <Route
                path="perceivable/1-4-11"
                element={<KontrastIInnehall />}
              />

              <Route path="operable" element={<Operable />} />
              <Route
                path="operable/2-1"
                element={<TillgangligtViaTangentbord />}
              />
              <Route path="operable/2-1-1" element={<Tangentbord />} />
              <Route path="operable/2-2" element={<TillrackligtMedTid />} />
              <Route
                path="operable/2-3"
                element={<AnfallOchFysiskaReaktioner />}
              />
              <Route path="operable/2-4" element={<Navigeringsbar />} />
              <Route path="operable/2-4-3" element={<Fokusordning />} />
              <Route path="operable/2-4-4" element={<SyftetMedLank />} />
              <Route path="operable/2-4-7" element={<SynligtFokus />} />
              <Route path="operable/2-5" element={<Inmatningsmetoder />} />
              <Route path="operable/2-5-8" element={<Malstorlek />} />

              <Route path="understandable" element={<Understandable />} />
              <Route path="understandable/3-1" element={<Lasbarhet />} />
              <Route path="understandable/3-2" element={<Forutsagbar />} />
              <Route path="understandable/3-3" element={<InputAssistance />} />

              <Route path="robust" element={<Robust />} />
              <Route path="robust/4-1" element={<Kompatibel />} />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
