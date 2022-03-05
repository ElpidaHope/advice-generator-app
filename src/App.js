import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState(117)
  const [advice, setAdvice] = useState('')
  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
  }, [id])

  const getAdvice = () => {
    const newId = Math.floor(Math.random() * 224)
    setId(newId)
  }
  
  return (
    <div className='container'>
      <p className="title">Advice #{id}</p>
      <h1 className='advice'>{advice}</h1>
      <div className="pattern" style={{height: "30px", width: "100%"}}></div>
      <div className="dice-container" onClick={getAdvice}>
      </div>
    </div>
  );
}

export default App;
