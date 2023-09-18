import { Box, Typography } from '@mui/material';
import {
  title,
  opening,
  passionStatement,
  expertise,
  transparency,
  comprehensiveCoverage,
  userFocused,
  ending1,
  ending2,
  ending3,
} from '../data/about';
import Title from './global/Title';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const Item = ({ content }) => {
    return (
      <Box>
        <Typography variant="h3" paragraph sx={{ textIndent: '35px' }}>
          {content}
        </Typography>
      </Box>
    );
  };
  return (
    <Box m={5} p={2} my={2} sx={{ backgroundColor: colors.grey[800] }}>
      <Title title="Welcome" />
      <Box mb={0} pt={3} px={9}>
        <Typography sx={{ mb: 8, fontWeight: 'bold' }} variant="h3" paragraph>
          {title}
        </Typography>
        <Item content={opening} />
        <Item content={passionStatement} />
        <Item content={expertise} />
        <Item content={transparency} />
        <Item content={comprehensiveCoverage} />
        <Item content={userFocused} />
        <Item content={ending1} />
        <Item content={ending2} />
        <Item content={ending3} />
      </Box>
    </Box>
  );
};
export default About;
