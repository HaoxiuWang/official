import { Box, Typography, Container, Chip } from '@mui/material';
export default ({}) =>(
  <Box sx={{ 
    minHeight: '80vh', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    textAlign: 'center',
    background: 'radial-gradient(circle at 50% 50%, #112240 0%, #020c1b 100%)',
    position: 'relative',
    px: 3,
    py: 10
  }}>
    {/* 1. 极简身份标识：名字 + 职业，合并为一行 */}
    

    {/* 2. 核心宣言：放大并精简 */}
    <Typography variant="h1" sx={{ 
      mb: 3, 
      fontWeight: 900, 
      fontSize: { xs: '2.8rem', md: '4.5rem' },
      maxWidth: '900px',
      lineHeight: 1.1,
      color: '#ccd6f6'
    }}>
      I build tools, <br />
      <span style={{ color: '#64ffda', opacity: 0.8 }}>not just use.</span>
    </Typography>

    {/* 3. 哲学描述：控制在两行以内，减少视觉负担 */}
    <Typography variant="body1" sx={{ 
      maxWidth: '650px', 
      color: 'text.secondary',
      fontSize: { xs: '1rem', md: '1.2rem' },
      lineHeight: 1.6,
      mb: 5
    }}>
       Building the engines behind the apps. From custom frameworks to K8s & V8 isolates. I create the tools that scale.
    </Typography>

    
  </Box>
);