import { useState } from "react";

export default function Form({onAddItem}) {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] =  useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item) return;

        const newItem = { id: Date.now(), item, quantity, packed: false }
        onAddItem(newItem);
        
        setQuantity(1);
        setItem('');
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select name="quantity" value={quantity} onChange={(e) => Number(setQuantity(e.target.value))}>
                {Array.from({length: 20}, (_, i) => i + 1).map(num => (
                    <option value={num} key={num}>{num}</option>
                ))}
            </select>
            <input type="text" placeholder="Item..." value={item} onChange={(e) => setItem(e.target.value)} />
            <button>Add</button>
        </form>
    )
}