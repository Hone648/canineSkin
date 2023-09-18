import { Box, Grid, IconButton, Typography } from '@mui/material';
import Logo from '../../images/canineSkinLogo.png';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid container justifyContent="space-between" m={1}>
      <Grid item xs={11} display="flex" alignItems="flex-end">
        <Box>
          <img src={Logo} alt="logo" width="300px" />
        </Box>
        <Box p={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Typography>
            Product Reviews Keeping Good Dogs from Bad Skin
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1} display="flex" justifyContent="flex-end">
        <IconButton size="large">
          <SubscriptionsIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
