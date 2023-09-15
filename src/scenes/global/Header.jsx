import { Box, IconButton, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Logo from '../../images/canineSkinLogo.png';

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* {Search Bar } */}
      <Box mb={0} display="flex">
        <img src={Logo} alt="logo" width="300px" />
        <Box m={1} mb={0} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Typography mb={0} pt={3} paragraph>
            Product Reviews Keeping Good Dogs from Bad Skin
          </Typography>
        </Box>
      </Box>
      {/* {ICONS} */}
      <Box display="flex">
        <IconButton size="large">
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
