import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { tokens } from '../theme';
import Radar from '../components/radar';

const styles = {
  radar: {
    height: '250px',
    justifyContent: 'left',
    width: '400px',
  },
};
const TopDogShampoos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="shampoos-container" mt={4}>
      <Box>
        <Typography variant="h1">Stupid Dog Shampoo Co.</Typography>
      </Box>
      <Box display="flex">
        <Box sx={styles.radar}>
          <Radar />
        </Box>
        <Box>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default TopDogShampoos;
