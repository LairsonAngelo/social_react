import Home from './pages/Home';
import SignIn from './pages/SignIn';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './mock';
import GuestRoute from './routes/GuestRoute';
import {Provider} from 'react-redux';
import store from './store';
import Auth from './components/Auth';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>    
        <Auth>
          <Routes>
            <Route path='/' element={<Home />} />
            <GuestRoute path='/signin' element={<SignIn />} />
            <Route path='*' element={<h1>404!</h1>} />
          </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
