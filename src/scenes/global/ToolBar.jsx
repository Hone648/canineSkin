import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Toolbar,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import { useState } from 'react';

const ToolBar = () => {
  const [selected, setSelected] = useState('Home');
  const handleClick = ({ title, to }) => {
    setSelected(title);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const pages = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Topicals',
      to: '/topical',
    },
    {
      title: 'Dietary',
      to: '/dietary',
    },
    {
      title: 'Supplementary',
      to: '/supplements',
    },
  ];
  return (
    <Grid container display="flex" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: { xs: 'flex' },
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {pages.map((page) => (
            <Link key={page.title} to={page.to}>
              <Button key={page.title} onClick={() => handleClick(page)}>
                <Grid item minHeight="45px" display="flex" alignItems="center">
                  <Typography
                    textAlign="center"
                    variant="h4"
                    color={
                      selected === page.title
                        ? colors.greenAccent[600]
                        : colors.blueAccent[900]
                    }
                  >
                    {page.title}
                  </Typography>
                </Grid>
              </Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default ToolBar;
