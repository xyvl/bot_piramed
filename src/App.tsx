import { CheckBalance } from "./components/CheckBalance";
import { BuyTestVip } from "./components/BuyTestVip";
import { FormCreateAndFinishTask } from "./components/FormCreateAndFinishTask";
import { CheckTask } from "./components/CheckTask";
import { AddWithDrawal } from "./components/AddWithDrawal"
import { data_1 } from "./data/data_1";
import { data_2 } from "./data/data_2";
import { data_3 } from "./data/data_3";
import { data_4 } from "./data/data_4";
import { data_5 } from "./data/data_5";
import { data_6 } from "./data/data_6";
import { useState } from "react"

function App() {
  const arrayFlow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState(data_1)
  return (
    <div>
      <h1>Выбери поток:</h1>
      <label>1: </label>
      <input type="radio" onClick={() => setData(data_1)} name="raz"/>
      <label>2: </label>
      <input type="radio" onClick={() => setData(data_2)} name="raz"/>
      <label>3: </label>
      <input type="radio" onClick={() => setData(data_3)} name="raz"/>
      <label>4: </label>
      <input type="radio" onClick={() => setData(data_4)} name="raz"/>
      <label>5: </label>
      <input type="radio" onClick={() => setData(data_5)} name="raz"/>
      <label>6: </label>
      <input type="radio" onClick={() => setData(data_6)} name="raz"/>
      <div className="flex_2">
        <div style={{display: 'flex'}}>
          <CheckBalance  data={data}/>
          <CheckTask  data={data}/>
          <AddWithDrawal data={data}/>
        </div>
        <BuyTestVip  data={data}/>
      </div>
      <div className="flex">
        {arrayFlow.map((el) => (
          <FormCreateAndFinishTask data={data} value={el} key={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
