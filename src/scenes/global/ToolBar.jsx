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
      to: '/topicals',
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
    <Box display="flex" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: { xs: 'flex' },
            justifyContent: { xs: 'none', sm: 'space-around' },
            flexWrap: 'wrap',
            backgroundColor: colors.greenAccent[300],
          }}
        >
          {pages.map((page) => (
            <Link key={page.title} to={page.to}>
              <Button key={page.title} onClick={() => handleClick(page)}>
                <Grid item display="flex" alignItems="center">
                  <Typography
                    textAlign="center"
                    variant="h4"
                    color={
                      selected === page.title
                        ? colors.blueAccent[600]
                        : colors.greenAccent[900]
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
    </Box>
  );
};
export default ToolBar;
