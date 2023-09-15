import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const handleClick = (buttonName) => {
  console.log('You clicked ' + buttonName);
};

const ToolBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const pages = ['About Us', 'Cremes', 'Shampoos', 'Sprays', 'Contact Us'];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-around',
          }}
        >
          {pages.map((page) => (
            <Button key={page} onClick={() => handleClick(page)}>
              <Typography
                textAlign="center"
                variant="h4"
                color={colors.blueAccent[900]}
              >
                {page}
              </Typography>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ToolBar;
