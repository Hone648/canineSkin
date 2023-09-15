import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={2} textAlign="center" sx={{ backgroundColor: colors.grey[900] }}>
      <Typography variant="h1">About Us</Typography>
      <Typography variant="h1">About Us</Typography>
      <Typography variant="h1">About Us</Typography>
      <Typography variant="h1">About Us</Typography>
    </Box>
  );
};
export default About;
