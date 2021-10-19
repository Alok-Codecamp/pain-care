import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import Registration from './components/Login/Registration/Registration';
import AuthProvider from './contexts/contexts';
import Detail from './components/Detail/Detail';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import OurServices from './components/OurServices/OurServices/OurServices';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
         <PrivateRoute path="/detail/:serviceId">
           <Detail></Detail>
           </PrivateRoute>
           <PrivateRoute path="/ourService">
              <OurServices></OurServices>
             </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
