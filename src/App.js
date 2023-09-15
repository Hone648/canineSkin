import { ColorModeContext, useMode, tokens } from './theme';
import Header from './scenes/global/Header';
import { Grid, CssBaseline, ThemeProvider, Box } from '@mui/material';
import ToolBar from './scenes/global/ToolBar';
import About from './scenes/About';

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Grid container>
            <Grid container>
              <Grid item xs={12}>
                <Header />
                <ToolBar />
              </Grid>
            </Grid>
            <main className="content">
              <About />
            </main>
          </Grid>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
