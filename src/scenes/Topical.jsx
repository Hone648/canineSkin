import { Box, Typography } from '@mui/material';
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

  const Item = ({ item, content }) => {
    return (
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          {item}
        </Typography>
        <Typography variant="h3" paragraph sx={{ textIndent: '35px' }}>
          {content}
        </Typography>
      </Box>
    );
  };
  return (
    <Box m={5} p={2} my={2} sx={{ backgroundColor: colors.grey[800] }}>
      <Title title="Topicals" />
      <Box mb={0} pt={3} px={9}>
        <Typography variant="h3" paragraph sx={{ textIndent: '35px' }}>
          {intro}
        </Typography>
        <Item item={item1} content={item1Content} />
        <Item item={item2} content={item2Content} />
        <Item item={item3} content={item3Content} />
        <Item item={item4} content={item4Content} />
        <Item item={item5} content={item5Content} />
        <Typography variant="h3" paragraph sx={{ textIndent: '35px' }}>
          {conclusion}
        </Typography>
      </Box>
    </Box>
  );
};
export default Topical;