import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import Features from './components/Features';
import AIDemo from './components/AIDemo';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <div className="relative z-10">
        <Hero />
        <Features />
        <AIDemo />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
