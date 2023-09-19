import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Title = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      className="title-container"
      textAlign="left"
      sx={{
        mx: {
          xs: 1,
          md: 2,
          lg: 8,
        },
        mt: {
          xs: 1,
          lg: 10,
        },
      }}
    >
      <Box className="title-wrapper">
        <Typography
          color={colors.blueAccent[400]}
          sx={{ fontWeight: 'bold' }}
          variant="h1"
        >
          {title}
        </Typography>
      </Box>
      <Box className="subtitle-wrapper" display="flex">
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Box>
    </Box>
  );
};
export default Title;
