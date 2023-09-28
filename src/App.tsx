import { useEffect, useState } from "react";
import { data } from "./data";
import { loginRequest } from "./requests/login";
import { ILoginRequest } from "./type/TypeLogin";
import { CreateAndFinishTask } from "./components/CreateAndFinishTask";
import { CheckBalance } from "./components/CheckBalance";
import { BuyTestVip } from "./components/BuyTestVip"

function App() {
  return (
    <div>
      <h1>Привет петушок!!!</h1>
      <CreateAndFinishTask />
      <CheckBalance />
      <BuyTestVip/>
    </div>
  );
}

export default App;
