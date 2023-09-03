import { useSelector, useDispatch } from "react-redux";
import {actionCreators} from './store/action-creators';
import {bindActionCreators} from 'redux';

function App() {
  const account = useSelector(state => state.account);

  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);


  return(
      <div className="App">
        <h1>{account}</h1>
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      </div>
  );
}

export default App;
