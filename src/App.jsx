import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Landingpages from './Pages/Landingpages';
import Resumegenerator from './Pages/Resumegenerator';
import History from './Pages/History';
import Form from './Pages/Form';
import Pagenotfound from './Pages/Pagenotfound';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Landingpages/>} />
        <Route path='/resume-generator' element={<Resumegenerator/>}  />
        <Route path='/history' element={<History/>}/>
        <Route path='/form' element={<Form/>}  />
        <Route path='/*' element={<Pagenotfound/>}  />
      </Routes>
      <Footer/>
     </>
  )
}

export default App
