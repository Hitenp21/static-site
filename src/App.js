import './App.css';
import Navbarlist from './components/header';
import { Footer } from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import About from './pages/About';
import CountsContainer from './components/count';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import FQ from './pages/Fq';
import Category from './pages/Category';
import CableGland from './pages/CableGland';
import ExtensionPiece from './pages/cableGalnd/extension';
import PgBrass from './pages/cableGalnd/pgBrass';
import Earthing from './pages/cableGalnd/erthingTag';
import LockNut from './pages/cableGalnd/lockNut';
import BrassReducers from './pages/cableGalnd/brassReducer';
import StoppingPlug from './pages/cableGalnd/brassStopping';
import LineTap from './pages/cableGalnd/lineTap';
import SplitBolt from './pages/cableGalnd/splitBolt';
import SanitaryParts from './pages/sanitaryParts';
import HexNipple from './pages/sanitaryParts/hexNipple';
import Union from './pages/sanitaryParts/union';
import ReducingBush from './pages/sanitaryParts/reducingBush';
import SocketRound from './pages/sanitaryParts/socketRound';
import ConnectorSingleSide from './pages/sanitaryParts/connectorSingleSide';
import DoubleSideMove from './pages/sanitaryParts/doubleSideMove';
import WaterMeter from './pages/sanitaryParts/waterMeter';
import TeeCoupling from './pages/sanitaryParts/teeCoupling';
import ElbowCoupling from './pages/sanitaryParts/elbowCoupling';
import KimNipple from './pages/sanitaryParts/kimNipple';
import MalePlug from './pages/sanitaryParts/malePlug';
import FemalePlug from './pages/sanitaryParts/femalePlug';
import HoseNipple from './pages/sanitaryParts/hoseNipple';
import LongNipple from './pages/sanitaryParts/longNipple';
import CPSocket from './pages/sanitaryParts/cpSocket';
import BrassNut from './pages/sanitaryParts/brassNut';
import CPCrossTee from './pages/sanitaryParts/cpCrossTee';
import CPMaleFemaleElbow from './pages/sanitaryParts/cpMaleFemaleElbow';
import CPHexCapFemale from './pages/sanitaryParts/cpHexCapFemale';
import CPHexNipple from './pages/sanitaryParts/cpHexNipple';
import CPPlugMaleFemale from './pages/sanitaryParts/cpPlugMaleFemale';
import CPWasteCoupling from './pages/sanitaryParts/cpWasteCoupling';
import './header1.css';

function App() {
  const [t, i18n] = useTranslation("global")
  const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'en'); // State for current locale, default to English

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
    i18n.changeLanguage(selectedLocale);
    localStorage.setItem('locale', selectedLocale); // Store selected language in localStorage
  };

  useEffect(() => {
    // On component mount, set language based on stored value in localStorage
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      setLocale(storedLocale);
      i18n.changeLanguage(storedLocale);
    }
  }, []); // Run only once on component mount

  return (
    <>
      <>
        <div className='navbar-container'>
          <span className='navbar-section time-section'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16" style={{ marginRight: '7px', transition: 'color 0.3s' }}>
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <p className='hp'>Working hours: Mon - Sat 9:00 AM - 8:00 PM</p>
          </span>
          <span className='navbar-section call-section'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16" style={{ marginRight: '7px', transition: 'color 0.3s' }}>
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            <p className='hp'>Call Us: +91 7984353863</p>
          </span>
          <div className='navbar-section language-section'>
            <LanguageSelector onLanguageChange={handleLanguageChange} />
          </div>
        </div>

      </>

      <Navbarlist />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />

        <Route path="/category/cables" element={<CableGland />} />
        <Route path="/category/cables/extention-piece" element={<ExtensionPiece />} />
        <Route path="/category/cables/pg-brass-cable-gland" element={<PgBrass />} />
        <Route path="/category/cables/earthing-tag" element={<Earthing />} />
        <Route path="/category/cables/lock-nut" element={<LockNut />} />
        <Route path="/category/cables/brass-reducers" element={<BrassReducers />} />
        <Route path="/category/cables/brass-stopping-plug" element={<StoppingPlug />} />
        <Route path="/category/cables/line-taps" element={<LineTap />} />
        <Route path="/category/cables/split-bolt-connector" element={<SplitBolt />} />

        <Route path="/category/sanitary" element={<SanitaryParts />} />
        <Route path="/category/sanitary/hex-nipple" element={<HexNipple />} />
        <Route path="/category/sanitary/union" element={<Union />} />
        <Route path="/category/sanitary/reducing-bush" element={<ReducingBush />} />
        <Route path="/category/sanitary/socket-round" element={<SocketRound />} />
        <Route path="/category/sanitary/round-flange-tank-connector-single-side-move" element={<ConnectorSingleSide />} />
        <Route path="/category/sanitary/tank-connector-double-side-move" element={<DoubleSideMove />} />
        <Route path="/category/sanitary/water-meter-connctor" element={<WaterMeter />} />
        <Route path="/category/sanitary/tee-coupling" element={<TeeCoupling />} />
        <Route path="/category/sanitary/elbow-coupling" element={<ElbowCoupling />} />
        <Route path="/category/sanitary/kim-nipple" element={<KimNipple />} />
        <Route path="/category/sanitary/male-plug" element={<MalePlug />} />
        <Route path="/category/sanitary/female-plug" element={<FemalePlug />} />
        <Route path="/category/sanitary/hose-nipple" element={<HoseNipple />} />
        <Route path="/category/sanitary/long-nipple" element={<LongNipple />} />
        <Route path="/category/sanitary/cp-socket" element={<CPSocket />} />
        <Route path="/category/sanitary/brass-nut" element={<BrassNut />} />
        <Route path="/category/sanitary/cp-cross-tee" element={<CPCrossTee />} />
        <Route path="/category/sanitary/cp-male-female-elbow" element={<CPMaleFemaleElbow />} />
        <Route path="/category/sanitary/cp-hex-nipple" element={<CPHexNipple />} />
        <Route path="/category/sanitary/cp-hex-cap-female" element={<CPHexCapFemale />} />
        <Route path="/category/sanitary/cp-plug-male-female" element={<CPPlugMaleFemale />} />
        <Route path="/category/sanitary/cp-waste-coupling" element={<CPWasteCoupling />} />
        {/* <Route path="/category/sanitary/pg-brass-cable-glands-nickle-plated" element = {<HexNipple />} /> */}



        <Route path="/fq" element={<FQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );

  function LanguageSelector({ onLanguageChange }) {
    const handleChange = (e) => {
      const selectedLocale = e.target.value;
      onLanguageChange(selectedLocale);
    };

    return (
      <div className="language-selector-container">

        <select className="language-selector" onChange={handleChange} value={locale}>
          <option value="en">English</option>
          <option value="fr">French</option>
          {/* Add other languages as needed */}
        </select>
      </div>
    );
  }
}

export default App;
