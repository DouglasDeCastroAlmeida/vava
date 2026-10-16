import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getStudioTheme } from './theme/studioTheme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TvAndReelsSection from './components/TvAndReelsSection';
import TheaterPillarsAndTimeline from './components/TheaterPillarsAndTimeline';
import CastingSheetAndFaq from './components/CastingSheetAndFaq';
import BookingContactSection from './components/BookingContactSection';
import FloatingSpeedDial from './components/FloatingSpeedDial';
import Footer from './components/Footer';

const SECTION_IDS = [
  'inicio',
  'na-tv',
  'teatro-trajetoria',
  'ficha-tecnica',
  'contato',
];

export default function App() {
  const [mode, setMode] = useState('light');
  const [paletteId, setPaletteId] = useState('terracotta');
  const [activeSection, setActiveSection] = useState('inicio');

  const theme = useMemo(() => getStudioTheme(mode, paletteId), [mode, paletteId]);

  const handleToggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar
          mode={mode}
          onToggleMode={handleToggleMode}
          paletteId={paletteId}
          onSelectPalette={setPaletteId}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <HeroSection onNavigate={handleNavigate} />
          <TvAndReelsSection onNavigate={handleNavigate} />
          <TheaterPillarsAndTimeline />
          <CastingSheetAndFaq onNavigate={handleNavigate} />
          <BookingContactSection />
        </Box>
        <Footer onNavigate={handleNavigate} />
        <FloatingSpeedDial onNavigate={handleNavigate} />
      </Box>
    </ThemeProvider>
  );
}
