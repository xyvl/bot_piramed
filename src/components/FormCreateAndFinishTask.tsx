import { useState, useEffect } from "react";
import { firstRequest } from "../requests/First";
import { secondRequest } from "../requests/Second";
import { thirdRequest } from "../requests/Third";
import { fourthRequest } from "../requests/Fourth";
import { data } from "../data";
import { loginRequest } from "../requests/login";

export const FormCreateAndFinishTask = ({ value }: { value: number }) => {
  const [id, setId] = useState(-1);

  useEffect(() => {
    if (id !== -1) {
      console.log(id);
      if(value * 25 - 1 < id){
				return;
      }
      const start = async () => {
				while (true) {
					console.log("ya");
					console.log(id)
          const info = await loginRequest(id);
          const JWT = info.info.token;
          const task_id = await firstRequest(JWT);
          const [_, code_dec]: any = await secondRequest(JWT, task_id);
          console.log(code_dec);
          if (code_dec === "Сегодняшний номер исчерпан") {
            setId((currentValue) => currentValue + 1);
            return;
          }
          if (
            code_dec !== "Сегодняшний номер исчерпан" &&
            code_dec !== "операция успешна"
          ) {
            console.log("сбой");
            continue;
          }
          const order_id = await thirdRequest(JWT);
          await fourthRequest(JWT, order_id);
        }
      };
			if(data[id]?.JWT !== undefined){
				if (data[id].JWT !== "") start();
			}
    }
  }, [id]);
  // console.log((value - 1) * 25, value * 25 - 1);
  return (
    <div style={{textAlign: "center"}}>
      {id >= 0 ? <h1>{id}</h1> : null}
      <button onClick={() => setId((value - 1) * 25)}>Поток {value}</button>
    </div>
  );
};
