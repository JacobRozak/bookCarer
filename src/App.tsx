import './App.css';
import { useState, useEffect } from 'react';
import CarersCard from './components/carersCard/carersCard';
import TopBanner from './components/topBanner/topBanner';
import { Carers, Carer } from "./interfaces/carers"

function App() {
  const [carers, setCarers] = useState<Carer[]>([]);
  const getJsonRequest = async () => {
    try {
      const url: string = `https://ceracare.github.io/fe-exercise/carers.json`;
      const response = await fetch(url);
      const responseJson: Carers = await response.json();
      if (responseJson) {
        setCarers(responseJson.carers);
      }
    } catch (e) {
      console.log("error msg: " + e);
    }
  };
  useEffect(() => {
    getJsonRequest();
  }, []);
  return (
    <div className='container'>
      <TopBanner />
      <div className="cards">
        <CarersCard cards={carers} />
      </div>
    </div>
  );
}

export default App;
