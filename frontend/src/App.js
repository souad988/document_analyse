import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import DocumentUpload from './components/documentUpload';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/test/')
      .then(res => res.json())
      .then(data => setData(data.data));
  })

  return (
    <div className="App">
      <header className="App-header">
        <DocumentUpload /> 
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
