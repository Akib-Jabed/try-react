import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({selectedFriend, onSplitBill}) {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");
    const paidByFriend = bill ? bill - paidByUser : "";

    function handleFormSubmit(e) {
        e.preventDefault()

        if (!bill || !paidByUser)   return;
        
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    }

    return (
        <form className="form-split-bill" onSubmit={handleFormSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label htmlFor="bill">💰 Bill Value</label>
            <input type="text" id="bill" value={bill} onChange={(e) => setBill(e.target.value)} />

            <label htmlFor="my-expense">🧍‍♀️ Your Expense</label>
            <input type="text" id="my-expense" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

            <label htmlFor="friend-expense">👫 {selectedFriend.name}'s expense</label>
            <input type="text" id="friend-expense" disabled value={paidByFriend} />

            <label htmlFor="bill-paid-by">🤑 Who is paying the bill</label>
            <select id="bill-paid-by" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}