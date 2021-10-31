import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../src/components/Home/Header/Header';
import Home from '../src/components/Home/Home/Home';
import Footer from '../src/components/Home/Footer/Footer';
import NotFound from '../src/components/Home/NotFound/NotFound';
import Doctors from '../src/components/Home/Doctors/Doctors';
import Appointment from '../src/components/Home/Appointment/Appointment';
import Treatment from '../src/components/Home/Treatment/Treatment';
import Contact from '../src/components/Home/Contact/Contact';
import About from '../src/components/Home/About/About';
import Login from '../src/components/Home/Login/Login';
import SingleTreatment from './components/Home/SingleTreatment/SingleTreatment';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App mb-0 w-100">
       <AuthProvider>
       <Router>
        <Header/>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route exact path="/home"><Home></Home></Route>
          <Route exact path="/doctors"><Doctors></Doctors></Route>
          <PrivateRoute exact path="/appointment"><Appointment></Appointment></PrivateRoute>
          <Route exact path="/treatment"><Treatment></Treatment></Route>
          <PrivateRoute exact path="/singletreatment"><SingleTreatment></SingleTreatment></PrivateRoute>
          <PrivateRoute path="/singletreatment/:treatmentId"><SingleTreatment></SingleTreatment></PrivateRoute>
          <Route exact path="/about"><About></About></Route>
          <Route exact path="/contact"><Contact></Contact></Route>
          <Route exact path="/login"><Login></Login></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
        <Footer/>
      </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
