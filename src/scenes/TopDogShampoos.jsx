import { Box, Typography, useTheme } from '@mui/material';
import Radar from '../components/radar';
import { total } from '../data/radarData';
import { tokens } from '../theme';

const TopDogShampoos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = {
    container: {
      height: '100%',
      mx: '100px',
      background: colors.greenAccent[400],
      borderRadius: '50% / 20% 40% 20% 40%',
    },
    radarWrapper: {
      height: '400px',
      width: '1000px',
      mb: '3em',
      mr: '400px',
    },
    score: {
      color: colors.blueAccent[200],
      fontSize: '3em',
      flex: 1,
      pb: '1em',
    },
  };

  return (
    <Box sx={styles.container}>
      <Box display="flex">
        <Box sx={styles.radarWrapper}>
          <Radar />
        </Box>
      </Box>
    </Box>
  );
};
export default TopDogShampoos;
