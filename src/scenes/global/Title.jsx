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
        my: 2,
        mx: {
          xs: 2,
          md: 4,
          lg: 6,
          xl: 8,
        },
      }}
    >
      <Box className="title-wrapper" mb={0}>
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
