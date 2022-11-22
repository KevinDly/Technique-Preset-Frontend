import InfoContainer from './components/InfoContainer';
import { AppBar, Typography } from '@mui/material';

function App() {
  return (
    
    <div className="App">
        <div>
          <AppBar position = {"absolute"} sx = {{p: 1}}>
            <Typography variant = {"h4"}>
              Technique Preset Creator  
            </Typography>
          </AppBar>
        </div>
        <div style={{marginTop: 75}}>
          <InfoContainer/>
        </div>
    </div>
  );
}

export default App;
