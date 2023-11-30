import { Box, Button, TextField, Typography, Dialog } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SubscriptionForm = ({ open, handleClose, handleClickOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="dialog-container">
      <Dialog open={open} onClose={handleClose}>
        <Box
          className="dialog-wrapper"
          sx={{ backgroundColor: colors.blueAccent[800] }}
        >
          <Box m={1}>
            <Typography variant="h3">Subscribe</Typography>
          </Box>
        </Box>
        <Box
          className="dialog-content"
          sx={{ backgroundColor: colors.blueAccent[900] }}
        >
          <Box m={2}>
            <Typography variant="h5">
              Subscribe to receive occasional emails.
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography>Input email</Typography>
            <Typography>Cancel Submit</Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};
export default SubscriptionForm;
