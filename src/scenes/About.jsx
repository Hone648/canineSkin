import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';
import Title from './global/Title';
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
const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const Statement = ({ content, variant }) => {
    return (
      <Box>
        <Typography
          variant={variant}
          px={9}
          pt={2}
          textAlign="left"
          sx={{ fontWeight: 'bold' }}
        >
          {content}
        </Typography>
      </Box>
    );
  };
  const Paragraph = ({ content }) => {
    return (
      <Box>
        <Typography variant="h3" px={9} pt={2} textAlign="left">
          {content}
        </Typography>
      </Box>
    );
  };

  return (
    <Box m={2} sx={{ backgroundColor: colors.grey[900] }}>
      <Box m={2} px={9} pt={2} textAlign="left">
        <Title title="About Us"></Title>
      </Box>
      <Box m={2}>
        <Paragraph content={title} />
        <Paragraph content={opening} />
        <Typography
          variant="h3"
          px={9}
          pt={2}
          textAlign="left"
          sx={{ fontWeight: 'bold' }}
        >
          Our Passion for Canine Well-being
        </Typography>
        <Typography variant="h3" px={9} pt={2} textAlign="left">
          {passionStatement}
        </Typography>
        <Statement content="Why Choose Canine Skin" variant={'h3'} />
        <Statement content="Expertise:" variant={'h4'} />
        <Paragraph content={expertise} />
        <Statement content="Transparency:" variant={'h4'} />
        <Paragraph content={transparency} />
        <Statement content="Comprehensive Coverage:" variant={'h4'} />
        <Paragraph content={comprehensiveCoverage} />
        <Statement content="User-Focused:" variant={'h4'} />
        <Paragraph content={userFocused} />
        <Paragraph content={ending1} />
        <Paragraph content={ending2} />
        <Paragraph content={ending3} />
      </Box>
    </Box>
  );
};
export default About;
