import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeaseForm from './components/LeaseForm';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeaseForm />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
