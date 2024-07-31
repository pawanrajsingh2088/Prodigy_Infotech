import './App.css';
import Home from './Component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./Component/style.css";
import Projects from './Component/Projects';
import About from './Component/About';
import Contact from './Component/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <Toaster position='top-right' />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;