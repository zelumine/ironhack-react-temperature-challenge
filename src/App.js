import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Temperature from './Pages/Temperature';
import CustomizeImage from './Pages/Customize-Image';

function App() {
  return (
    <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/temperature">Temperature</NavLink>
          <NavLink to="/customize-image">Customize image</NavLink>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/temperature" component={Temperature}/>
          <Route exact path="/customize-image" component={CustomizeImage}/>
        </Switch>

      
    </div>
  );
}

export default App;
