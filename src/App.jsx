import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Destinations from './pages/Destinations.jsx';
import KindWords from './pages/KindWords';
import FAQs from './pages/FAQs.jsx';
import RequestQuote from './pages/RequestQuote.jsx';
import Nav from './components/sections/Nav.jsx';
import Footer from './components/sections/Footer.jsx';

function App() {
  return (
    <div className="bg-offwhite min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/kind-words" element={<KindWords />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/request-a-quote" element={<RequestQuote />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;