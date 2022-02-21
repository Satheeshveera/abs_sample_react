import '../Styles/App.css';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Welcome from './Welcome';
import VegLists from './VegLists';
import NonvegLists from './NonvegLists';
import SingleItem from './SingleItem';

function App() {
  return (
    <div className="App container-fluid p-0">
      <BrowserRouter>
        <Home/>
        
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/veg" element={<VegLists vegUrl = "https://api.edamam.com/api/food-database/v2/parser?app_id=3b74bd0f&app_key=06bf8df046ee54cd5023703916acc14d&ingr=vegetarian&nutrition-type=cooking&health=alcohol-free"/>} />
          <Route path="/nonveg" element={<NonvegLists vegUrl ="https://api.edamam.com/api/food-database/v2/parser?app_id=3b74bd0f&app_key=06bf8df046ee54cd5023703916acc14d&ingr=chicken&nutrition-type=cooking&health=alcohol-free"/>} />
          <Route path="single:id" element={<SingleItem key={Math.random*1000}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
