import { Routes, Route } from 'react-router-dom';
import FormSecurePlace from 'components/FormSecurePlace/FormSecurePlace';
import Places from "components/Places/Places";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<FormSecurePlace />} />
        <Route path="/places" element={<Places />} />
      </Routes>

    </div>
  );
}

export default App;
