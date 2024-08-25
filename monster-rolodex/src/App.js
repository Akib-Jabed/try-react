import { useEffect, useRef, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

function App() {
  const [monsters, setMonsters] = useState([]);
  const filteredMonsters = useRef([]);

  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setMonsters(data);
      filteredMonsters.current = data;
    });
  }, []);

  function onSearchChange(e) {
    let searchKey = e.target.value;
    setMonsters(monsters => filteredMonsters.current.filter(monster => monster.name.toLowerCase().includes(searchKey.toLowerCase())));
  }

  return (
    <div className="app">
      <h1>Monsters Rolodex</h1>
      <SearchBox handleChange={onSearchChange} />
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;


