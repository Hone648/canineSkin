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
  const Item = ({ content }) => {
    return (
      <Box>
        <Typography variant="h3" paragraph sx={{ textIndent: '20px' }}>
          {content}
        </Typography>
      </Box>
    );
  };
  return (
    <Box className="about-container">
      <Box className="about-title-wrapper">
        <Title title="Welcome" />
      </Box>
      <Box
        className="about-content-wrapper"
        sx={{ mx: { xs: 2, md: 8, xl: 20 } }}
      >
        <Typography paragraph variant="h3" sx={{ my: 9, fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Item content={opening} />
        <Item content={passionStatement} />
        <Item content={expertise} />
        <Item content={transparency} />
        <Item content={comprehensiveCoverage} />
        <Item content={userFocused} />
        <Typography variant="h3" paragraph>
          {ending1}
        </Typography>
        <Typography variant="h3" paragraph>
          {ending2}
        </Typography>
        <Typography variant="h3" paragraph>
          {ending3}
        </Typography>
      </Box>
    </Box>
  );
};
export default About;
