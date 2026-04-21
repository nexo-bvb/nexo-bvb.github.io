import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalLayout } from './components/layout/GlobalLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </GlobalLayout>
    </Router>
  );
}

export default App;
