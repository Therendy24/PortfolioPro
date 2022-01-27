

import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';


//import this for the react-toastify in the app.js
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      {/* //to avoid rendering all componenents , just all components in one */}
      {/* this is done by creating a commonUtils file  */}
      <PortfolioContainer/>
      
    </div>
  );
}

export default App;
