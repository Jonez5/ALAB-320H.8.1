import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from "./components/StarshipCard";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const starshipsData = await getAllStarships();
      setStarships(starshipsData.results); 
    }
    fetchStarships();
  }, []);

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <div className="starships-container">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} name={starship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;