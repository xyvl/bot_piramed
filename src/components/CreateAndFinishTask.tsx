import React, { useState, useEffect } from "react";
import { firstRequest } from "../requests/First";
import { secondRequest } from "../requests/Second";
import { thirdRequest } from "../requests/Third";
import { fourthRequest } from "../requests/Fourth";
import { data } from "../data";
import { loginRequest } from "../requests/login";

export const CreateAndFinishTask = () => {
  const [ya, setYa] = useState(-1);

  useEffect(() => {
    if (ya !== -1) {
      console.log(ya);
      if (data.length - 1 <= ya) {
        return;
      }
      const g = async () => {
        while (true) {
          const info = await loginRequest(ya);
          const JWT = info.info.token;
          const task_id = await firstRequest(JWT);
          const [code, code_dec]: any = await secondRequest(JWT, task_id);
          console.log(code_dec);
          if (code_dec === "Сегодняшний номер исчерпан") {
            setTimeout(() => {
              setYa((currentValue) => currentValue + 1);
            }, 10);
            return;
          }
          if (
            code_dec !== "Сегодняшний номер исчерпан" &&
            code_dec !== "операция успешна"
          ) {
            console.log("сбой");
            continue;
          }
          const id = await thirdRequest(JWT);
          await fourthRequest(JWT, id);
        }
      };
      if (data[ya].JWT !== "") g();
    }
  }, [ya]);
  return (
    <>
      {ya >= 0 ? <h1>{ya}</h1> : null}
      <button onClick={() => setYa(0)}>Создать и закончить задания</button>
    </>
  );
};
