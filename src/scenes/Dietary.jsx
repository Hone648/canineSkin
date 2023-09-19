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
  item6,
  item6Content,
  item7,
  item7Content,
  item8,
  item8Content,
  conclusion,
} from '../data/dietary';
import Title from './global/Title';
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';

const Dietary = () => {
  const Item = ({ item, content }) => {
    return (
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          {item}
        </Typography>
        <Typography variant="h3" paragraph sx={{ textIndent: '20px' }}>
          {content}
        </Typography>
      </Box>
    );
  };
  return (
    <Box m={5} p={2} my={2}>
      <Title title="Dietary" />
      <Box mb={0} pt={3} px={9}>
        <Typography variant="h3" paragraph sx={{ textIndent: '20px' }}>
          {intro}
        </Typography>
        <Item item={item1} content={item1Content} />
        <Item item={item2} content={item2Content} />
        <Item item={item3} content={item3Content} />
        <Item item={item4} content={item4Content} />
        <Item item={item5} content={item5Content} />
        <Item item={item6} content={item6Content} />
        <Item item={item7} content={item7Content} />
        <Item item={item8} content={item8Content} />
        <Item content={conclusion} />
      </Box>
    </Box>
  );
};
export default Dietary;
