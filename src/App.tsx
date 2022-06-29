import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import Record from './component/Record';
import Toppage from './component/Top-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Toppage />}></Route>
        </Routes>
        <Routes>
          <Route path="/record" element={<Record />}></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
