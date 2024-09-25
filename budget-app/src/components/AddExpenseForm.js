import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from "../contexts/AppContext";

export default function AddExpenseForm() {
    const { dispatch } = useAppContext();
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !cost) return;

        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost)
        }   
        setName("");
        setCost("");

        dispatch({ type: "ADD_EXPENSE", payload: expense });
    }

    return (
    <form onSubmit={handleFormSubmit}>
        <div className="row">
            <div className="col-sm">
                <label for="name">Name</label>
                <input type="text" 
                    id="name" 
                    required='required' 
                    value={name} 
                    className="form-control" 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="col-sm">
                <label for="cost">Cost</label>
                <input type="text" 
                    id="cost" 
                    required='required' 
                    className="form-control" 
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}    
                />
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <button type="Submit" className="btn btn-primary mt-3">Save</button>
            </div>
        </div>
    </form>
  )
}
