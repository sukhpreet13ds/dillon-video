import 'animate.css'
import './style/style.css'
import './style/services.css'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Branding from './pages/Branding'
import Drone from './pages/Drone'
import ShortForm from './pages/ShortForm'
import MultiCamera from './pages/MultiCamera'
import LiveStreaming from './pages/LiveStreaming'
import StagingLightingAudio from './pages/StagingLightingAudio'
import CorporateEvent from './pages/CorporateEvent'
import ProductPhotography from './pages/ProductPhotography'
import RealEstate from './pages/RealEstate'
import OurWork from './pages/OurWork'
import About from './pages/About'
import Inquiry from './pages/Inquiry'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { BookingModalProvider } from './context/BookingModalContext'

function App() {

  return (
    <BookingModalProvider>  
      <Router>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/project-inquiry" element={<Inquiry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/branding-videos" element={<Branding />} />
          <Route path="/drone" element={<Drone />} />
          <Route path="/drone-aerial" element={<Drone />} />
          <Route path="/short-form" element={<ShortForm />} />
          <Route path="/short-form-content" element={<ShortForm />} />
          <Route path="/multi-camera" element={<MultiCamera />} />
          <Route path="/multi-camera-production" element={<MultiCamera />} />
          <Route path="/live-streaming" element={<LiveStreaming />} />
          <Route path="/staging-lighting-audio" element={<StagingLightingAudio />} />
          <Route path="/corporate-event" element={<CorporateEvent />} />
          <Route path="/corporate-event-production" element={<CorporateEvent />} />
          <Route path="/product-photography" element={<ProductPhotography />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/real-estate-photography" element={<RealEstate />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </BookingModalProvider>
  )
}

export default App
