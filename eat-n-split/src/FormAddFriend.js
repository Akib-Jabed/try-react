import { useState } from 'react';
import Button from './Button';

export default function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image)    return;

        const id = crypto.randomUUID();
        const newFrined = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0
        }

        onAddFriend(newFrined);
        setName("")
        setImage("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">👫 Friend Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="image">🌄 Image URL</label>
            <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />

            <Button>Add</Button>
        </form>
    )
}