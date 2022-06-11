import Home from './pages/Home';
import Theme from './Theme';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './index.css';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes >
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;