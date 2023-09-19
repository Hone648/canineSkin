import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { tokens } from '../theme';
import Image from '../images/cuteSideModal.jpg';

const TopDogShampoos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="container">
      <Box
        className="header"
        display="flex"
        sx={{
          height: '540px',
          justifyContent: 'center',
        }}
      >
        <Box className="image-wrapper" sx={{}}>
          <img className="header-img" src={Image} alt="side-puppy" />
        </Box>
      </Box>
      <Box className="content-container"></Box>
    </Box>
  );
};
export default TopDogShampoos;
