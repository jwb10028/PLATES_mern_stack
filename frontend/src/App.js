import { BrowserRouter, Routes, Route} from 'react-router-dom'


//pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Player from './components/Audioplayer' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>

        </div>

        <div className='footer'>
          <Player/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
