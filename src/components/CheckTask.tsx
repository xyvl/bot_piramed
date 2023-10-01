import { useState, useEffect } from "react";
import { thirdRequest } from "../requests/Third";
import { fourthRequest } from "../requests/Fourth";
import { data } from "../data";
import { loginRequest } from "../requests/login";

export const CheckTask = () => {
	const [id, setId] = useState(-1);

  useEffect(() => {
    if (id !== -1) {
      const start = async () => {
				while (true) {
          const info = await loginRequest(id);
          const JWT = info.info.token;
          const order_id = await thirdRequest(JWT);
					console.log(order_id)
					if(order_id === 0){
						setId((currentValue) => currentValue + 1);
            return;
					}
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
      <button onClick={() => setId(0)}>Проверить все выполненные задания</button>
    </div>
  );
}
