import InfoContainer from './components/InfoContainer';
import { AppBar, Typography } from '@mui/material';

function App() {
  return (
    
    <div className="App">
        <div>
          <AppBar position = {"absolute"} padding ={"5px"}>
            <Typography variant = {"h4"}>
              Sample App Bar  
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
