import { ColorModeContext, useMode } from './theme';
import Header from './scenes/global/Header';
import { Grid, Box, CssBaseline, ThemeProvider } from '@mui/material';
import ToolBar from './scenes/global/ToolBar';
import About from './scenes/About';
import { Routes, Route } from 'react-router-dom';
import Topical from './scenes/Topical';
import Dietary from './scenes/Dietary';
import TopDogShampoos from './scenes/TopDogShampoos';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Grid container>
            <Header />
            <ToolBar />
            <Box className="content">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/topicals" element={<Topical />} />
                <Route path="/dietary" element={<Dietary />} />
                <Route path="/topicals/shampoos" element={<TopDogShampoos />} />
              </Routes>
            </Box>
          </Grid>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
