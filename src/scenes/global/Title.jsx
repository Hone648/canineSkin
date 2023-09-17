import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Title = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        color={colors.blueAccent[400]}
        sx={{ fontWeight: 'bold' }}
        variant="h1"
      >
        {title}
      </Typography>
      <Typography
        color={colors.greenAccent[300]}
        sx={{ fontWeight: 'bold' }}
        variant="subtitle1"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Title;
