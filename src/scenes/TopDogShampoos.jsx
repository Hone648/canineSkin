import { Box, Typography, useTheme } from '@mui/material';
import Radar from '../components/radar';
import { tokens } from '../theme';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { shampooKeys, shampooData } from '../data/data';

const TopDogShampoos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = {
    container: {
      height: '100%',
      maxWidth: '100vw',
      mt: '20px',
      mx: '170px',
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      mt: '20px',
    },
    headerText: {
      fontSize: '4rem',
    },
    content1: {
      mt: '10px',
    },
    radarWrapper: {
      height: '400px',
      width: '600px',
      flex: 2,
      background: colors.greenAccent[400],
      borderRadius: '50% / 20% 40% 20% 40%',
    },
    toggleList: {
      flex: 1,
      mt: '130px',
      p: '35px',
      ml: '50px',
      background: colors.blueAccent[600],
      borderRadius: '50% / 20% 20% 20% 20%',
    },
    shampooList: {
      textAlign: 'center',
      fontSize: '1.5em',
      flex: 2,
      opacity: '90%',
    },
    switch: {
      mt: '2px',
      flex: 1,
    },
  };

  const ListItem = ({ item }) => {
    return (
      <Box display="flex">
        <Typography sx={styles.shampooList}>{item}</Typography>
        <FormGroup sx={{ ml: '30px' }}>
          <FormControlLabel
            control={<Switch defaultChecked size="large" sx={styles.switch} />}
          />
        </FormGroup>
      </Box>
    );
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.headerWrapper}>
        <Typography sx={styles.headerText}>Our Top 5 Picks</Typography>
      </Box>
      <Box sx={styles.content1}>
        <Box display="flex">
          <Box sx={styles.radarWrapper}>
            <Radar data={shampooData} keys={shampooKeys} indexBy="category" />
          </Box>
          <Box sx={styles.toggleList}>
            {shampooKeys.map((item, index) => {
              return <ListItem key={index} item={item} />;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TopDogShampoos;
