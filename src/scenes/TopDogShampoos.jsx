import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import Radar from '../components/radar';

const styles = {
  container: {
    mt: 4,
  },
  radarWrapper: {
    height: '250px',
    justifyContent: 'left',
    width: '400px',
  },
};
const TopDogShampoos = () => {
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography variant="h1">Stupid Dog Shampoo Co.</Typography>
      </Box>
      <Box display="flex">
        <Box sx={styles.radarWrapper}>
          <Radar />
        </Box>
        <Box
          sx={{ minWidth: '20em', minHeight: '20em', backgroundColor: 'red' }}
        >
          <Typography>Box</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default TopDogShampoos;
