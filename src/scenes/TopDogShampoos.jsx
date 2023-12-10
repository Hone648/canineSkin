import { Box, Typography, useTheme } from '@mui/material';
import Radar from '../components/radar';
import { tokens } from '../theme';
import Switch from '@mui/material/Switch';
import { shampooKeys, shampooData } from '../data/data';
import { useState } from 'react';

const TopDogShampoos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [keys, setKeys] = useState(shampooKeys);
  const [checked, setChecked] = useState([
    {
      0: true,
    },
    {
      1: true,
    },
    {
      2: true,
    },
    {
      3: true,
    },
    {
      4: true,
    },
  ]);
  const styles = {
    shampoosContainer: {
      height: '100%',
      maxWidth: '100vw',
      mt: '20px',
      mx: '170px',
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'center',
      background: colors.blueAccent[600],
      borderRadius: '50% / 10% 50% 10% 50%',
    },
    headerText: {
      fontSize: '2.8rem',
      textDecoration: 'underline',
    },
    topFiveWrapper: {
      justifyContent: 'space-around',
      mt: '20px',
    },
    topFiveItems: {
      fontSize: '1rem',
      color: colors.greenAccent[200],
    },
    topFiveSwitch: {
      color: 'warning',
    },
    content1: {
      mt: '0px',
    },
    radarWrapper: {
      height: '500px',
      width: '600px',
      flex: 1,
    },
    switchWrapper: {
      textAlign: 'center',
    },
  };

  return (
    <Box className="shampoos-container" sx={styles.shampoosContainer}>
      <Box className="shampoos-header-wrapper" sx={styles.headerWrapper}>
        <Typography sx={styles.headerText}>Our Top Rated Shampoos</Typography>
      </Box>
      <Box
        className="shampoos-top5-wrapper"
        display="flex"
        sx={styles.topFiveWrapper}
      >
        {shampooKeys.map((item, index) => {
          return (
            <div key={index}>
              <Box>
                <Typography sx={styles.topFiveItems} key={index}>
                  {index + 1}. {item}
                </Typography>
              </Box>
              <Box sx={styles.switchWrapper}>
                <Switch
                  // checked={checked[index]}
                  sx={styles.topFiveSwitch}
                  defaultChecked
                  size="small"
                />
              </Box>
            </div>
          );
        })}
      </Box>
      <Box className="content-1" sx={styles.content1}>
        <Box display="flex">
          <Box className="radar-wrapper" sx={styles.radarWrapper}>
            <Radar data={shampooData} keys={keys} indexBy="category" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TopDogShampoos;
