import React, { useRef } from 'react';
import { CssBaseline, ThemeProvider, Box, Typography, Container, Chip } from '@mui/material';
import theme from './theme/darkTheme';
import Navbar from './components/NavBar';
import Manifesto from './components/Manifesto';
import ProjectSection from './components/ProjectSection';
import Hero from './components/Hero';
import BioCard from "./components/BioCard"

export default function App() {
  
  const manifestoRef = useRef(null);
  const projectsRef = useRef(null);
  const experimentRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar 
          onNavigateManifesto={() => scrollToSection(manifestoRef)} 
          onNavigateProjects={() => scrollToSection(projectsRef)}
          onNavigateExperiments={() => scrollToSection(experimentRef)}
        />
        <main>
          <Hero />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
            <BioCard />
          </Container>
          <Box ref={manifestoRef}><Manifesto /></Box>
          <Box ref={projectsRef}><ProjectSection /></Box>
          
          <Container maxWidth="md" ref={experimentRef} sx={{ py: 20, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontWeight: 800 }}>
              Experit
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 800 }}>
              Serverless with V8 Isolates
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              
              This experiment aims to simulate Cloudflare's 'Cloud Computing without Containers' model—an Isolate-as-a-Service architecture. It delivers instant-on scalability by leveraging web standards and WebAssembly, enabling high-performance compute directly at the network edge.
            </Typography>
            <Box sx={{ 
              p: 4, 
              border: '1px dashed #233554', 
              borderRadius: 2, 
              bgcolor: 'rgba(10, 25, 47, 0.5)',
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.9rem',
              color: '#64ffda'
            }}>
              Coming soon!
            </Box>
          </Container>
        </main>

        <Box component="footer" sx={{ py: 6, textAlign: 'center', borderTop: '1px solid #233554', mt: 10 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"Fira Code", monospace' }}>
             © 2026. Built with React.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}