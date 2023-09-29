import { useEffect, useState } from "react";
import { data } from "../data";
import { loginRequest } from "../requests/login";
import { ILoginRequest } from "../type/TypeLogin";


export const CheckBalance = () => {
  const [getAllAccountInfo, setGetAllAccountInfo] = useState<"" | any[]>("");

  useEffect(() => {
    if (getAllAccountInfo !== "" && getAllAccountInfo.length === 0) {
      const g: any[] = [];
      const requst = async () => {
        for (let i = 0; i < data.length; i++) {
          console.log(i)
          if (data[i].JWT === "") continue;
          const u = await loginRequest(i);
          g.push(u);
        }
        setGetAllAccountInfo(g);
      };
      requst();
    }
  }, [getAllAccountInfo]);
  return (
    <div>
      <button onClick={() => setGetAllAccountInfo([])}>Проверить баланс</button>
      {getAllAccountInfo !== ""
        ? getAllAccountInfo?.map((value: ILoginRequest, index) => (
            <div key={index}>
              <span> id: {index}</span>
              <span> phone: {data[index].telephone}</span>
              <span> password: {data[index].password}</span>
              <span> rub: {value.info.balance}</span>
              <span> vip level: {value.info.vip_level}</span>
            </div>
          ))
        : null}
    </div>
  );
};
