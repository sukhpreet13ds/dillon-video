import 'animate.css'
import './style/style.css'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import ThankYou from './pages/ThankYou'
import Navbar from './components/Navbar'

function App() {

  return (
    <>  
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
