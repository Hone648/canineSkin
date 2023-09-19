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
import { Link as Hyper } from '@mui/material';

const Topical = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const LinkContent = ({ to, content }) => {
    return <Link to={to}>{content}</Link>;
  };
  const Item = ({ item, content, link }) => {
    return (
      <Box className="topical-item-wrapper">
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          {item}
        </Typography>
        <Typography variant="h3" paragraph sx={{ textIndent: '20px' }}>
          {content} {link}
        </Typography>
      </Box>
    );
  };
  return (
    <Box className="topical-container">
      <Box className="topical-title-wrapper">
        <Title title="Topicals" subtitle="Sep 2023" />
      </Box>
      <Box
        className="topical-content-wrapper"
        sx={{ mx: { xs: 2, lg: 8, xl: 20 } }}
      >
        <Typography variant="h3" paragraph my={9} sx={{ textIndent: '20px' }}>
          {intro}
        </Typography>
        <Box className="test">
          <Item
            item={item1}
            content={item1Content}
            link={
              <LinkContent
                to="/topicals/shampoos"
                content="See our shampoo reviews for more details."
              />
            }
          />
        </Box>
        <Item item={item2} content={item2Content} />
        <Item item={item3} content={item3Content} />
        <Item item={item4} content={item4Content} />
        <Item item={item5} content={item5Content} />
        <Typography paragraph variant="h3" sx={{ textIndent: '20px', mt: 5 }}>
          {conclusion}
        </Typography>
      </Box>
    </Box>
  );
};
export default Topical;
