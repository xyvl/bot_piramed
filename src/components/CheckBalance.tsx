import { useEffect, useState } from "react";
import { loginRequest } from "../requests/login";
import { ILoginRequest } from "../type/TypeLogin";


export const CheckBalance = ({data}: any) => {
  const [getAllAccountInfo, setGetAllAccountInfo] = useState<"" | any[]>("");
  const [count, setCount] = useState<number>(-1);
  useEffect(() => {
    if (getAllAccountInfo !== "" && getAllAccountInfo.length === 0) {
      const g: any[] = [];
      const requst = async () => {
        for (let i = 0; i < data.length; i++) {
          setCount(curr => curr + 1)
          if (data[i].JWT === "") continue;
          const u = await loginRequest(i, data);
          g.push(u);
        }
        setGetAllAccountInfo(g);
      };
      requst();
    }
  }, [getAllAccountInfo]);
  return (
    <div>
      {count >= 0 ? <h1>{count}</h1> : null}
      <button onClick={() => setGetAllAccountInfo([])}>Проверить баланс</button>
      {getAllAccountInfo !== ""
        ? getAllAccountInfo?.map((value: ILoginRequest, index) => (
            <div key={index}>
              <span> id: {index}</span>
              <span> phone: {data[index].telephone}</span>
              <span> password: {data[index].password}</span>
              <span> rub: {value.info.balance}</span>
              <span> vip level: {value.info.vip_level}</span>
              <span>fond: {value.info.is_fund_password === 1 ? 'true' : 'false'}</span>
            </div>
          ))
        : null}
    </div>
  );
};
