import { Routes, Route } from 'react-router-dom';
import Pochta from "./components/pochta/pochta";
import Register from './components/register/register';
import Trekcod from './components/trekcod/trekcod';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Pochta/>}/>
        <Route path="Мурда катталдыңыз беле?" element={<Pochta/>}/>
        <Route path="/success" element={<Register />}/>

        <Route path="/word" element={<Trekcod />}/>
      </Routes>
    </div>
  );
}

export default App;
