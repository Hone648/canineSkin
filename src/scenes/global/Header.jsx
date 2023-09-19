import * as React from 'react';
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
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Logo from '../../images/canineSkinLogo.png';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Header = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [modalOpen, setModalOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = (subscribed) => {
    if (subscribed) {
      setModalOpen(false);
      setSnackOpen(true);
      setTimeout(() => setSnackOpen(false), 3000);
    } else {
      setModalOpen(false);
    }
  };
  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
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
      <Grid item xs={1} display="flex" justifyContent="flex-end">
        <Tooltip disableFocusListener arrow title="Subscribe">
          <IconButton size="large" onClick={handleModalOpen}>
            <SubscriptionsIcon />
          </IconButton>
          <Dialog open={modalOpen} onClose={() => handleModalClose}>
            <Typography variant="h3" sx={{ m: 3 }}>
              Subscribe
            </Typography>
            <DialogContent>
              <Typography paragraph variant="h5">
                To receive occasional updates, please enter your email address.
              </Typography>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleModalClose(false)}>Cancel</Button>
              <Button onClick={() => handleModalClose(true)}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </Tooltip>
        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={handleModalClose}
        >
          <Alert
            onClose={handleSnackClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Email Registered Successfully!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

export default Header;
