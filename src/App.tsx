import { CheckBalance } from "./components/CheckBalance";
import { BuyTestVip } from "./components/BuyTestVip";
import { FormCreateAndFinishTask } from "./components/FormCreateAndFinishTask";
import { CheckTask } from "./components/CheckTask";
import { AddWithDrawal } from "./components/AddWithDrawal"

function App() {
  const arrayFlow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1>Привет петушок!!!</h1>
      <div className="flex_2">
        <div style={{display: 'flex'}}>
          <CheckBalance />
          <CheckTask />
          <AddWithDrawal/>
        </div>
        <BuyTestVip />
      </div>
      <div className="flex">
        {arrayFlow.map((el) => (
          <FormCreateAndFinishTask value={el} key={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
