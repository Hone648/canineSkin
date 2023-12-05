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
import { Link } from 'react-router-dom';

const styles = {
  item: {
    wrapper: {
      mt: '2em',
      fontWeight: 'bolder',
    },
    content: {
      lineHeight: '1.5em',
      textIndent: '1.5em',
      mb: 0,
    },
  },
  content: {
    display: {
      mx: {
        xs: 2,
        lg: 8,
        xl: 20,
      },
    },
    intro: {
      textIndent: '1.5em',
      lineHeight: '1.5em',
      my: '2.5em',
    },
    link: {
      fontSize: '3em',
      textDecoration: 'none',
      color: 'black',
      '&:hover': { textDecoration: 'underline' },
    },
    linkContainer: {
      my: '2em',
      textAlign: 'center',
      width: '100%',
    },
  },
};

const Topical = () => {
  const Item = ({ item, content }) => {
    return (
      <Box>
        <Typography variant="h3" sx={styles.item.wrapper}>
          {item}
        </Typography>
        <Typography variant="h3" paragraph sx={styles.item.content}>
          {content}
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <Box>
        <Title title="Topicals" subtitle="Sep 2023" />
      </Box>
      <Box sx={styles.content.display}>
        <Box>
          <Typography variant="h3" sx={styles.content.intro}>
            {intro}
          </Typography>
        </Box>
        <Item item={item1} content={item1Content} />
        <Box sx={styles.content.linkContainer}>
          <Typography>
            <Link
              className="link"
              style={styles.content.link}
              to="/topicals/shampoos"
            >
              Check out our top rated shampoos!
            </Link>
          </Typography>
        </Box>
        <Box>
          <Item item={item2} content={item2Content} />
          <Item item={item3} content={item3Content} />
          <Item item={item4} content={item4Content} />
          <Item item={item5} content={item5Content} />
          <Item content={conclusion} />
        </Box>
      </Box>
    </Box>
  );
};
export default Topical;
