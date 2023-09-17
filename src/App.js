import { ColorModeContext, useMode, tokens } from './theme';
import Header from './scenes/global/Header';
import { Grid, CssBaseline, ThemeProvider, Box } from '@mui/material';
import ToolBar from './scenes/global/ToolBar';
import About from './scenes/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
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
                <Route path="/" element={<About />}></Route>
              </Routes>
            </main>
          </Grid>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
