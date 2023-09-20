
import  ReactDOM  from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './components/Home/Home'
import Page from './components/Page/Page'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    
    <Router>
      <Routes>
        <Route path='/freddy' element={<Home />}/>
        <Route path= '/freddy/page' element={<Page />} />
        
        <Route path='/header' element={<Header />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </Router>
    
)