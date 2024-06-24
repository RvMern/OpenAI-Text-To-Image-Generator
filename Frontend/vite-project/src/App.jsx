import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GenerateImage from './components/GenerateImage';
import ViewImages from './components/ViewImages';
import Navbar from './components/Navbar';


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewImages/>}/>
        <Route path='/generate-image' element={<GenerateImage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
