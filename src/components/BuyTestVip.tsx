import { useEffect, useState } from "react";
import { data } from "../data";
import { loginRequest } from "../requests/login";
import { buyVipFunc } from "../requests/BuyVip";

export const BuyTestVip = () => {
  const [buyVip, setBuyVip] = useState(-1);
  useEffect(() => {
    if (buyVip >= 0) {
      console.log("start");
      const func = async () => {
        if (buyVip < data.length) {
          if (data[buyVip].JWT !== "") {
            const info = await loginRequest(buyVip);
            if (info.info.vip_level === 1) {
              const JWT = info.info.token;
              await buyVipFunc(JWT);
            }
          }
          setBuyVip((curr) => curr + 1);
        }
      };
      func();
    }
  }, [buyVip]);
  return (
    <div>
      {buyVip >= 0 ? <h1>{buyVip}</h1> : null}
      <button onClick={() => setBuyVip(0)}>Купить вип</button>
    </div>
  );
};
