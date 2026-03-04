/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Markets from './components/Markets';
import Materials from './components/Materials';
import Finishes from './components/Finishes';
import FAQ from './components/FAQ';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ConfiguratorModal from './components/ConfiguratorModal';
import DoypackPage from './components/DoypackPage';
import FlatBagPage from './components/FlatBagPage';
import InfoPage from './components/InfoPage';
import HowItWorks from './components/HowItWorks';
import ScrollToTop from './components/ScrollToTop';

function HomePage({ onOpenConfigurator }: { onOpenConfigurator: () => void }) {
  return (
    <>
      <Header onOpenConfigurator={onOpenConfigurator} />
      <main>
        <Hero />
        <Features />
        <Products onOpenConfigurator={onOpenConfigurator} />
        <Markets />
        <Materials />
        <Finishes />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function AppContent({ 
  onOpenConfigurator, 
  isConfiguratorOpen, 
  setIsConfiguratorOpen 
}: { 
  onOpenConfigurator: () => void, 
  isConfiguratorOpen: boolean,
  setIsConfiguratorOpen: (open: boolean) => void
}) {
  const location = useLocation();
  console.log('AppContent rendering, location:', location.pathname);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<HomePage onOpenConfigurator={onOpenConfigurator} />} />
          <Route path="/bolsas-doypack" element={<DoypackPage onOpenConfigurator={onOpenConfigurator} />} />
          <Route path="/bolsas-planas" element={<FlatBagPage onOpenConfigurator={onOpenConfigurator} />} />
          <Route 
            path="/servicios" 
            element={
              <InfoPage 
                title="Nuestros Servicios" 
                description="Ofrecemos servicios integrales de diseño, impresión y fabricación de envases flexibles. Desde la concepción de la idea hasta la entrega final, acompañamos a nuestros clientes en cada paso." 
                onOpenConfigurator={onOpenConfigurator}
                imageSeed="services-packaging"
              />
            } 
          />
          <Route 
            path="/mercados" 
            element={
              <InfoPage 
                title="Mercados" 
                description="Nuestras soluciones de packaging están presentes en diversos sectores: alimentación, cosmética, farmacia, industria química y más. Adaptamos cada envase a las normativas y necesidades de cada mercado." 
                onOpenConfigurator={onOpenConfigurator}
                imageSeed="market-industry"
              />
            } 
          />
          <Route 
            path="/acerca-de" 
            element={<AboutPage onOpenConfigurator={onOpenConfigurator} />} 
          />
          <Route 
            path="/como-funciona" 
            element={<HowItWorks onOpenConfigurator={onOpenConfigurator} />} 
          />
          {/* Catch-all route to prevent blank pages */}
          <Route path="*" element={<HomePage onOpenConfigurator={onOpenConfigurator} />} />
        </Routes>
      </div>
    {isConfiguratorOpen && <ConfiguratorModal onClose={() => setIsConfiguratorOpen(false)} />}
  </div>
  );
}

export default function App() {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const openConfig = () => setIsConfiguratorOpen(true);

  return (
    <Router>
      <AppContent 
        onOpenConfigurator={openConfig} 
        isConfiguratorOpen={isConfiguratorOpen} 
        setIsConfiguratorOpen={setIsConfiguratorOpen} 
      />
    </Router>
  );
}
