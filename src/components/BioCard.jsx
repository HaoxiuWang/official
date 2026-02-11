import React from 'react';
import { Box, Typography, Paper, Chip, Stack } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PublicIcon from '@mui/icons-material/Public';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function BioCard() {
  return (
    <Paper 
      elevation={24}
      sx={{ 
        p: 4, 
        maxWidth: 700,
        bgcolor: '#112240',
        border: '1px solid #64ffda', 
        borderRadius: 2,
        mx: 'auto',
        position: 'relative',
        zIndex: 5,
        // The "float" effect: negative margin pulls it into the Hero space
        mt: -12, 
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#ccd6f6', mb: 1 }}>
            PETER WANG
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontFamily: '"Fira Code", monospace', fontSize: '1rem' }}>
            {`> Senior Full-Stack Engineer | Framework Specialist | Open Source Contributor`}
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
          Expert in React and modern web ecosystems with a proven track record in building high-performance frameworks. Author of two acclaimed open-source projects. Extensive polyglot development experience across C/C++, C#/.NET, Go, Java/Kotlin, and Flutter/Dart. Currently specialized in Full-Stack architecture, Cloud-Native solutions (K8s/Service Mesh), and high-concurrency systems leveraging V8 isolates.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Chip 
            icon={<PublicIcon style={{ color: '#64ffda' }} />} 
            label="Based in Canada" 
            variant="outlined"
            sx={{ color: '#ccd6f6', borderColor: '#233554' }} 
          />
          <Chip 
            icon={<VerifiedUserIcon style={{ color: '#64ffda' }} />} 
            label="Work Permit Authorized" 
            variant="outlined"
            sx={{ color: '#ccd6f6', borderColor: '#233554' }} 
          />
        </Stack>

        <Typography variant="caption" sx={{ color: '#8892b0', borderLeft: '2px solid #64ffda', pl: 2 }}>
          Seeking opportunities to contribute to the Canadian technology ecosystem, 
          from high-level architecture to hands-on development roles.
        </Typography>
      </Stack>
    </Paper>
  );
}