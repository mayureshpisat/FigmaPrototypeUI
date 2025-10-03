import './App.css';
import { HomePage } from './pages/HomePage.jsx';
import { Footer } from './components/Footer.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Features } from './pages/Features.jsx';
import { NavBar } from './components/NavBar.jsx';
import { PricingPage } from './pages/PricingPage.jsx';


function App() {
  return (
    <div className='homepage-background'>
    <Router>
      <NavBar/>
      <div className='main-content'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>

      </Routes>
      </div>
    <Footer/>
    </Router>

    </div>
  );
}

export default App;
