import { useState } from "react";
import Item from "./Item";

export default function PackingList({items, onToggleItem, onDeleteItem}) {
    const [sortBy, setSortBy] = useState('input');
    
    let sortedItems = items;
    if (sortBy === 'item') {
        sortedItems =  [...items].sort((a, b) => a.item.localeCompare(b.item));
    }
    if (sortBy === 'quantity') {
        sortedItems =  [...items].sort((a, b) => a.quantity - b.quantity);
    }
    if (sortBy === 'packed') {
        sortedItems =  [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
    }    

    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => (
                    <Item item={item} 
                    onToggleItem={onToggleItem} 
                    onDeleteItem={onDeleteItem} 
                    key={item.id} />
                ))} 
            </ul>

            <div className="actions">
                <select name="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">by Default</option>
                    <option value="item">by Item</option>
                    <option value="quantity">by Quantity</option>
                    <option value="packed">by Packed Status</option>
                </select>
            </div>
        </div>
    )
}