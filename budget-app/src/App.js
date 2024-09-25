import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './components/AddExpenseForm';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import { useAppContext } from './contexts/AppContext';

function App() {
  const { state } = useAppContext();
  const totalSpent = state.expenses.reduce((acc, curr) => acc + curr.cost , 0);
  const remaining = state.budget - totalSpent;

  return (
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget classes="alert alert-secondary" title="Budget" amount={state.budget} />
          </div>
          <div className="col-sm">
            <Budget classes="alert alert-success" title="Remaining" amount={remaining} />
          </div>
          <div className="col-sm">
            <Budget classes="alert alert-primary" title="Spent so far" amount={totalSpent} />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div classNam="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
  );
}


export default App;
