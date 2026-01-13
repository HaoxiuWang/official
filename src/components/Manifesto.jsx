import { Box, Typography, Container, Divider } from '@mui/material';

export default function Manifesto() {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h3" color="primary" sx={{ fontWeight: 700, mb: 4 }}>
          Engineering Philosophy
        </Typography>
        <Typography variant="h5" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}>
          "Frameworks have become the new vanity metrics. If you can't build without them, you are not empowered—you are captured."
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 4 }}>
          In an era of <strong>Framework Inflation</strong>, we've traded fundamental understanding for abstraction layers. My work focuses on stripping away the "magic" to reveal the raw power of the runtime.
        </Typography>
        <Divider sx={{ borderColor: 'primary.main', width: '60px', borderBottomWidth: 3 }} />
      </Container>
    </Box>
  );
}