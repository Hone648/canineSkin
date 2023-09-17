import AppBar from '@mui/material/AppBar';
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
  const [selected, setSelected] = useState('About Us');
  const handleClick = (page) => {
    setSelected(page);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const pages = [
    'About Us',
    'Topical',
    'Shampoos',
    'Conditioners',
    'Oral Medication',
    'Supplements',
  ];
  return (
    <Grid container display="flex" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: { sm: 'flex' },
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {pages.map((page) => (
            <Button key={page} onClick={() => handleClick(page)}>
              <Grid
                item
                minHeight="45px"
                display="flex"
                alignItems="center"
                xs={12}
              >
                <Typography
                  textAlign="center"
                  variant="h4"
                  color={
                    selected === page
                      ? colors.greenAccent[600]
                      : colors.blueAccent[900]
                  }
                >
                  {page}
                </Typography>
              </Grid>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default ToolBar;
