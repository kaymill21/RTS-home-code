import './App.css';
import Navbar from './Navbar';
import Search from './Search';
import History from './History';
import Home from './Home';
import DataFetching from './DataFetching';
import RtsData from './tempData.json';
function App() {
  let component
  switch (window.location.pathname) {
    case '/':
     component = <Home />
     break
    case '/search':
      component = <Search data={RtsData}/>
      break
    case '/history':
      component = <History />
      break
  }
  return (
    <div className="App">
    <DataFetching />
    <Navbar />
      {component}
    </div>
  );
}

export default App;
