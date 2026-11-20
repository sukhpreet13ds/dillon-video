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
import ThankYou from './pages/ThankYou'
import Navbar from './components/Navbar'
import { BookingModalProvider } from './context/BookingModalContext'
import BookingModal from './components/BookingModal'

function App() {

  return (
    <BookingModalProvider>  
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
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
        <BookingModal />
      </Router>
    </BookingModalProvider>
  )
}

export default App
