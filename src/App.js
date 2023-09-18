import { ColorModeContext, useMode } from './theme';
import Header from './scenes/global/Header';
import { Grid, CssBaseline, ThemeProvider } from '@mui/material';
import ToolBar from './scenes/global/ToolBar';
import About from './scenes/About';
import { Routes, Route } from 'react-router-dom';
import Topical from './scenes/Topical';
import Dietary from './scenes/Dietary';

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
            <main className="content">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/topical" element={<Topical />} />
                <Route path="/dietary" element={<Dietary />} />
              </Routes>
            </main>
          </Grid>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
