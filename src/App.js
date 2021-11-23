import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from "./Homepage";
import Header from "./Header";


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/create' element={<Create/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
