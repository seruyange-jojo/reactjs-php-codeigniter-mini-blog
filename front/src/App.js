import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import New from './New.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/new' element={<New/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
