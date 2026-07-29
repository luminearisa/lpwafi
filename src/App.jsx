import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Foundation from './components/Foundation';
import DakwahSosial from './components/DakwahSosial';
import UPZ from './components/UPZ';
import SDTQ from './components/SDTQ';
import SMP from './components/SMP';
import SMA from './components/SMA';
import ProgramOverseas from './components/ProgramOverseas';
import BiroBekal from './components/BiroBekal';
import Programs from './components/Programs';
import Alumni from './components/Alumni';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';
import QuranDashboard from './components/Quran/QuranDashboard';
import SurahDetail from './components/Quran/SurahDetail';
import QuranCTA from './components/Quran/QuranCTA';
import HadithDashboard from './components/Hadith/HadithDashboard';
import HadithDetail from './components/Hadith/HadithDetail';
import KutubDashboard from './components/Kutub/KutubDashboard';
import KutubDetail from './components/Kutub/KutubDetail';
import OverseasCTA from './components/OverseasCTA';
import FasilitasBanin from './components/FasilitasBanin';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from public/data.json
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Memuat...</p>
        </div>
      </div>
    );
  }

  // Home Page Component
  const HomePage = () => (
    <>
      <Hero data={data} />
      <About data={data} />
      <QuranCTA data={data} />
      <Programs data={data} />
      <OverseasCTA />
      <Alumni data={data} />
      <News data={data} />
      <Contact data={data} />
    </>
  );

  // Foundation Page Component  
  const FoundationPage = () => (
    <>
      <Foundation data={data} />
    </>
  );

  // Dakwah Sosial Page Component
  const DakwahSosialPage = () => (
    <>
      <DakwahSosial data={data} />
    </>
  );

  // UPZ Page Component
  const UPZPage = () => (
    <>
      <UPZ data={data} />
    </>
  );

  // SDTQ Page Component
  const SDTQPage = () => (
    <>
      <SDTQ data={data} />
    </>
  );

  // SMP Page Component
  const SMPPage = () => (
    <>
      <SMP data={data} />
    </>
  );

  // SMA Page Component
  const SMAPage = () => (
    <>
      <SMA data={data} />
    </>
  );

  // Program Overseas Page Component
  const ProgramOverseasPage = () => (
    <>
      <ProgramOverseas data={data} />
    </>
  );

  // Biro Bekal Page Component
  const BiroBekalPage = () => (
    <>
      <BiroBekal data={data} />
    </>
  );

  // Fasilitas Banin Page Component
  const FasilitasBaninPage = () => (
    <>
      <FasilitasBanin data={data} />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Header data={data} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/yayasan" element={<FoundationPage />} />
          <Route path="/dakwah-sosial" element={<DakwahSosialPage />} />
          <Route path="/upz" element={<UPZPage />} />
          <Route path="/sdtq" element={<SDTQPage />} />
          <Route path="/smp" element={<SMPPage />} />
          <Route path="/sma" element={<SMAPage />} />
          <Route path="/program-overseas" element={<ProgramOverseasPage />} />
          <Route path="/biro-bekal" element={<BiroBekalPage />} />
          <Route path="/fasilitas-banin" element={<FasilitasBaninPage />} />
          <Route path="/quran" element={<QuranDashboard data={data} />} />
          <Route path="/quran/:surahId" element={<SurahDetail data={data} />} />
          <Route path="/hadith" element={<HadithDashboard data={data} />} />
          <Route path="/hadith/:bookId" element={<HadithDetail data={data} />} />
          <Route path="/kutub" element={<KutubDashboard data={data} />} />
          <Route path="/kutub/:bookId" element={<KutubDetail data={data} />} />
        </Routes>
        <Footer data={data} />
        <WhatsAppBubble data={data} />
      </div>
    </Router>
  );
}

export default App;
