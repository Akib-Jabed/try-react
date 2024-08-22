import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  const [items, setItems] = useState([]);

  const handleItemAdd = (item) => {
    setItems((prevItems) => [...prevItems, item])
  }

  const handleItemToggle = (itemId) => {
    setItems(prevItems => prevItems.map(item => item.id === itemId ? { ...item, packed: !item.packed} : item))
  }

  const handleItemDelete = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }

  return (
    <div className="app">
      <h1>🏝️ Far Away 🧳</h1>
      <Form onAddItem={handleItemAdd} />
      <PackingList items={items}
        onToggleItem={handleItemToggle} 
        onDeleteItem={handleItemDelete}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;


