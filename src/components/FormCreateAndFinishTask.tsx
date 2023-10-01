import { useState, useEffect } from "react";
import { firstRequest } from "../requests/First";
import { secondRequest } from "../requests/Second";
import { thirdRequest } from "../requests/Third";
import { fourthRequest } from "../requests/Fourth";
import { loginRequest } from "../requests/login";

export const FormCreateAndFinishTask = ({ value, data }: any) => {
  const [id, setId] = useState(-1);

  useEffect(() => {
    if (id !== -1) {
      if(value * 25 - 1 < id){
				return;
      }
      const start = async () => {
				while (true) {
					console.log(id)
          const info = await loginRequest(id, data);
          const JWT = info.info.token;
          const task_id = await firstRequest(JWT);
          const [_, code_dec]: any = await secondRequest(JWT, task_id);
          console.log(code_dec);
          if (code_dec === "Сегодняшний номер исчерпан" || code_dec === "членство истекло") {
            setId((currentValue) => currentValue + 1);
            return;
          }
          if (
            code_dec !== "Сегодняшний номер исчерпан" &&
            code_dec !== "операция успешна"
          ) {
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
  return (
    <div style={{textAlign: "center"}}>
      {id >= 0 ? <h1>{id}</h1> : null}
      <button onClick={() => setId((value - 1) * 25)}>Поток {value}</button>
    </div>
  );
};
