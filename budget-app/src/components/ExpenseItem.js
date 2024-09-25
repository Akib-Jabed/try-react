import { TiDelete } from 'react-icons/ti';
import { useAppContext } from '../contexts/AppContext';

export default function ExpenseItem({id, name, cost}) {
  const { dispatch } = useAppContext();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center bg-white">
        {name}
        <div> 
            <span className="badge badge-pill badge-primary mr-3 text-white bg-primary">
                {cost} BDT
            </span>
            <TiDelete size="1.5em" onClick={() => dispatch({type: "DELETE_EXPENSE", payload: id})}></TiDelete>
        </div>
    </li>
  )
}
