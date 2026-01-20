import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Container, Box, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import useIsMobile from "../libs/useIsMobile"
export default function Navbar({ onNavigateManifesto, onNavigateProjects, onNavigateExperiments }) {
  const isMobile = useIsMobile()
  console.log({isMobile})
  return (
    <AppBar position="sticky" elevation={0} sx={{ 
      bgcolor: 'rgba(2, 12, 27, 0.8)', 
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #233554',
      zIndex: (theme) => theme.zIndex.drawer + 1
    }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          
          {/* Brand Section: Avatar + Title */}
         <Box 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: 1.5, 
    cursor: 'pointer',
    '&:hover .nav-avatar': { borderColor: 'primary.main' }
  }}
>
  <Avatar 
    className="nav-avatar"
    src="/avatar.png" 
    sx={{ 
      width: 36, 
      height: 36, 
      border: '2px solid #233554',
      transition: '0.3s'
    }} 
  />
  
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography 
      variant="body1" 
      sx={{ 
        fontWeight: 700, 
        lineHeight: 1,
        color: '#ccd6f6', // 亮灰色，突出姓名
        fontSize: '0.95rem'
      }}
    >
      P.W. Official{/* 替换为你的真实名字 */}
    </Typography>
    
  </Box>
</Box>

          {/* Navigation Links */}
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={onNavigateManifesto} color="inherit" sx={{ '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
              Manifesto
            </Button>
            <Button onClick={onNavigateProjects} color="inherit" sx={{ '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
              Projects
            </Button>
            <Button onClick={onNavigateExperiments} color="inherit" sx={{ '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
              Experiments
            </Button>
          </Stack>

          {/* Action Button */}
          <Button 
            variant="outlined" 
            color="primary" 
            startIcon={<GitHubIcon />}
            href="https://github.com/haoxiuwang"
            target="_blank"
            sx={{ 
              borderRadius: '4px', 
              borderWidth: '1.5px', 
              textTransform: 'none',
              '&:hover': { borderWidth: '1.5px' } 
            }}
          >
            Source
          </Button>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}