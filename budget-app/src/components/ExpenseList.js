import { useAppContext } from "../contexts/AppContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
    const {state} = useAppContext() 

    return (
        <ul className="list-group">
            {state.expenses.map(expense => (
                <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    )
}
