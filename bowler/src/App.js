import './App.css';
import LoginPage from './components/login/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home/index';
import New from './components/newGame/index';
import Recent from './components/recentGame/index';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/new" component={New} />
      <Route exact path="/recent" component={Recent} />
    </Router>
  );
}

export default App;
