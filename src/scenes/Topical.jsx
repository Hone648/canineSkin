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
import { Link } from 'react-router-dom';

const Topical = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
    <Box justifyContent="center" m={5} p={2} my={2}>
      <Title title="Topicals" />
      <Box mb={0} pt={3} px={9}>
        <Typography variant="h3" paragraph sx={{ textIndent: '20px' }}>
          {intro}
        </Typography>
        <Item item={item1} content={item1Content} />
        <Link to={'/topical/shampoos'}>
          <Box m={1}>
            <Typography color={colors.blueAccent[500]} variant="h3">
              Our Top Rated Dog Shampoos
            </Typography>
          </Box>
        </Link>
        <Item item={item2} content={item2Content} />
        <Item item={item3} content={item3Content} />
        <Item item={item4} content={item4Content} />
        <Item item={item5} content={item5Content} />
        <Typography variant="h3" paragraph sx={{ textIndent: '20px' }}>
          {conclusion}
        </Typography>
      </Box>
    </Box>
  );
};
export default Topical;
