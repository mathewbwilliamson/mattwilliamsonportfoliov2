import { Header } from './Header/Header';
import { MainPage } from './MainPage/MainPage';
import { WorkPage } from './WorkPage/WorkPage';
import { ContactPage } from './ContactPage/ContactPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <Router>
      <Header />
      <Switch>
          <Route path="/work">
            <WorkPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
          </div>
  );
}

export default App;
