import {
  Box,
  Grid,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
} from '@mui/material';
import Logo from '../../images/canineSkinLogo.png';
import MailIcon from '@mui/icons-material/Mail';
import { useTheme } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';
import SubscriptionForm from '../../components/SubscriptionForm';

const Header = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
      <Grid
        item
        xs={1}
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Tooltip
          disableFocusListener
          arrow
          title={<Typography>Subscribe</Typography>}
        >
          <IconButton size="large" onClick={handleClickOpen}>
            <MailIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Header;
