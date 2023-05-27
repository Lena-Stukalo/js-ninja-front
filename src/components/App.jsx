import { Routes, Route } from 'react-router-dom';
import LayOut from './LayOut/LayOut';
import Hero from '../pages/HeroPage/HeroPage';
import Home from '../pages/HomePage/HomePage';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />} >
            <Route path="/" element={<Home />} />
            <Route path="/:heroId" element={<Hero />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App