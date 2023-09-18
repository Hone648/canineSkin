import { Box, Grid, Typography } from '@mui/material';
import {
  intro,
  item1,
  item1Content,
  item2,
  item2Content,
  item3,
  item3Content,
  item4,
  item4Content,
  item5,
  item5Content,
  conclusion,
} from '../data/topical';
import Title from './global/Title';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';

const Topical = () => {
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
        <Typography
          sx={{ textIndent: '35px' }}
          variant="h3"
          px={9}
          pt={2}
          textAlign="left"
        >
          {content}
        </Typography>
      </Box>
    );
  };

  return (
    <Grid container display="flex">
      <Box m={5} my={2} sx={{ backgroundColor: colors.grey[800] }}>
        <Title title="Topicals" />
        <Paragraph content={intro} variant="h3" />
        <Statement content={item1} variant="h3" />
        <Paragraph content={item1Content} variant="h3" />
        <Statement content={item2} variant="h3" />
        <Paragraph content={item2Content} variant="h3" />
        <Statement content={item3} variant="h3" />
        <Paragraph content={item3Content} variant="h3" />
        <Statement content={item4} variant="h3" />
        <Paragraph content={item4Content} variant="h3" />
        <Statement content={item5} variant="h3" />
        <Paragraph content={item5Content} variant="h3" />
        <Paragraph content={conclusion} variant="h3" />
      </Box>
    </Grid>
  );
};
export default Topical;
