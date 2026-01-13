import React from 'react';
import { Box, Typography, Paper, Chip, Stack, Divider } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PublicIcon from '@mui/icons-material/Public';

export default function ProfileCard() {
  return (
    <Paper 
      elevation={20}
      sx={{ 
        p: 3, 
        maxWidth: 500,
        bgcolor: '#112240',
        border: '1px solid #64ffda', // A thin neon border to show "Top Level"
        borderRadius: 2,
        position: 'relative',
        zIndex: 10,
        mt: -10, // Pulls it up into the Hero section overlap
        mx: 'auto',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
      }}
    >
      <Stack spacing={2}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#ccd6f6' }}>
            Peter Wang
          </Typography>
          <Typography variant="subtitle2" color="primary" sx={{ fontFamily: '"Fira Code", monospace' }}>
            Web Architect | 20+ Years Expertise
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: '#233554' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
          A polyglot engineer (C++, Go, Node.js) and former software entrepreneur. 
          Recently relocated to <strong>Canada</strong>. I combine deep architectural 
          roots with a passion for modern, zero-dependency web ecosystems.
        </Typography>

        <Stack direction="row" spacing={1}>
          <Chip 
            icon={<PublicIcon style={{ fontSize: 16, color: '#64ffda' }} />} 
            label="Based in Canada" 
            size="small" 
            sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)', color: '#ccd6f6' }} 
          />
          <Chip 
            icon={<BusinessCenterIcon style={{ fontSize: 16, color: '#64ffda' }} />} 
            label="Work Permit Holder" 
            size="small" 
            sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)', color: '#ccd6f6' }} 
          />
        </Stack>
        
        <Typography variant="caption" sx={{ color: '#8892b0', fontStyle: 'italic' }}>
          * Open to roles where I can contribute to the Canadian tech landscape.
        </Typography>
      </Stack>
    </Paper>
  );
}