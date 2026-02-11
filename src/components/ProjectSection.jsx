import { Box, Container, Grid, Typography, Paper, Chip, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: "Easy-React",
    tagline: "Reinventing the Reconciliation Engine",    
    description: "A custom React implementation featuring a Fiber-based reconciler, Concurrent Mode simulation, and a full Hooks API. Designed to bridge the gap between 'using React' and 'understanding React'.",
    highlights: ["Full React Hooks", "Virtual DOM Diff", "Stateful Components"],
    truth: "Frameworks shouldn't be black boxes. Easy-React proves that the core of modern UI engineering is logic, not magic.",
    link: "https://www.npmjs.com/package/@whxcctv/easy-react"
  },
  {
    title: "Linear-Http",
    tagline: "High-Performance, Zero-Dependency Architecture",
    description: "A precision-engineered micro-framework that combines the speed of a Radix Tree Router with the architectural elegance of Encapsulated Scopes. It proves that you don't need heavy dependencies to build scalable, maintainable systems.",
    highlights: ["Radix Tree Routing", "Plugin Encapsulation", "Zero-Dependency Core"],
    truth: "True power comes from understanding the platform, not hiding it. Linear provides a razor-thin abstraction over native APIs, giving you maximum control with minimum overhead.",
    link: "https://github.com/HaoxiuWang/linear-http"
  }
];

export default function ProjectSection() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {projects.map((item) => (
          <Grid item xs={12} key={item.title}>
            <Paper elevation={0} sx={{ 
              p: 6, 
              border: '1px solid #233554', 
              bgcolor: '#112240',
              '&:hover': { borderColor: '#00e676' }
            }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }}>{item.title}</Typography>
                  <Typography variant="h6" sx={{ mb: 3, opacity: 0.8 }}>{item.tagline}</Typography>
                  <Typography variant="body1" paragraph>{item.description}</Typography>
                  <Box sx={{ mt: 2, mb: 4 }}>
                    {item.highlights.map(h => <Chip label={h} key={h} sx={{ mr: 1, color: '#00e676', borderColor: '#00e676' }} variant="outlined" />)}
                  </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: { md: '1px solid #233554' }, pl: { md: 4 } }}>
                  <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold' }}>The Senior Perspective</Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 3, fontSize: '1rem' }}>
                    "{item.truth}"
                  </Typography>
                  <Button 
                    href={`${item.link}`}
                    target="_blank"
                    variant="contained" endIcon={<LaunchIcon />} sx={{ alignSelf: 'flex-start', px: 4 }}>
                    View Repository
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}