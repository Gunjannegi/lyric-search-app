import NavBar from './components/Layout/NavBar';
import { Route } from 'react-router-dom';
import Lyrics from './components/Tracks/Lyrics';
import Index from './components/Layout/Index';
function App() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <Route path="/" exact><Index /></Route>
                <Route path="/lyrics/track/:id" exact><Lyrics /></Route>
            </div>
      </div>
  );
}

export default App;
