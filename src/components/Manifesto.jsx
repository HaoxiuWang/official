import { Box, Typography, Container, Divider } from '@mui/material';

export default function Manifesto() {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h3" color="primary" sx={{ fontWeight: 700, mb: 4 }}>
          Engineering Philosophy
        </Typography>
        <Typography variant="h5" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}>
          "Tools should never be treated as black boxes."          
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 4 }}>
          Always act like you're their creators, because the more you can see internally, the further you can improve it.
        </Typography>
        <Divider sx={{ borderColor: 'primary.main', width: '60px', borderBottomWidth: 3 }} />
      </Container>
    </Box>
  );
}