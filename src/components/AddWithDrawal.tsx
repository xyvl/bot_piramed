import React, { useEffect, useState } from "react";
import { data } from "../data";
import { loginRequest } from "../requests/login";
import { nameRequest } from "../requests/Name";
import { CreateFondPasswordRequest } from "../requests/CreateFondPassword";
import { getBankCardListRequest } from "../requests/getBankCardList";
import { addBankCardRequest } from "../requests/AddBankCard"

export const AddWithDrawal = () => {
  const [value, setValue] = useState(-1);
  const address = [
    "TNQ5NQ83EtL2vW9CmdRHVTnZfBfVuYF9dJ",
    "TTXS4rwBD69dt7o6B6Go5cqwi6PzM1jHZ4",
    "TAZ15WW86C9zQcWvibjx8kf4eUx1Pbc5QQ",
    "TZGEG7Gcgk2gSuXNrkxUJvr1HXVwGk7uNo",
    "TDtfTYSSre6fnhGSjmPQ2qnkcAK2MJqvGK",
    "TJZVovxPtAhnNFVfXCF3jL8Ym1AevcsLiR",
    "TXmvoxonJakkiAA37uMB55wEkHtuRLPVQ7",
    "TKHUGkfCfzi7m5FYH3wERmTpgbXJJd1cbk",
    "TCBrGtsHQbQ6YSC9Ekv7fPKCnDJwwWyn7b",
    "TSNeKb3zBk2KNFNCt1YnGRjHWQNMgx2Tsw",
    "TLcAGmFa8gZSm8RvUWRQENUjABtJY4DhLn",
    "TDvNj41KopA8DUcxD5LfDxwzwXgzF6ZB74",
    "TJK7vfeLchdMx28GKMf6vAYQTu1Thda1np",
    "TWo2PjZCSuHTCDDGkE5DddG6fUcFSiYSmw",
    "TWNvZZ1UHvmaUvczcT2Xee524ZwG3jQGxX",
    "TJ6Ehu3EUov3eA2QA45WkpZb2EKQcM9KsF",
    "TEyztWvh441cDPWjAmHDV4RjEiHL9pxQ8w",
    "TGpmXYmV7pJBMRikPhApSmAb5vrovBqWQH",
    "TEWM8g1DhGuZ2RC8VnV2FjD3qCCX364kmj",
    "TKaPZ5H7e5LovHkaF1jEv3VkqV5mHobCN6",
  ];
  // console.log(address[value % address.length])

  useEffect(() => {
    if (value !== -1) {
      const start = async () => {
        const info = await loginRequest(value);
        const JWT = info.info.token;
        if (info.info.realname.length === 0) {
          await nameRequest(JWT);
        }
        if (info.info.is_fund_password === 0) {
          await CreateFondPasswordRequest(JWT, data[value].password);
        }
        const list = await getBankCardListRequest(JWT);
        if (list?.data === undefined) {
          const g = await loginRequest(value);
          await addBankCardRequest(g.info.token, g.info.realname, address[value % address.length])
        }
        setValue((curr) => curr + 1);
      };
      if (data[value]?.JWT !== undefined) {
        if (data[value].JWT !== "") {
          start();
        }
      }
    }
  }, [value]);
  return (
    <div style={{ textAlign: "center" }}>
      {value >= 0 ? <h1>{value + 1}</h1> : null}
      <button onClick={() => setValue(0)}>Добавить способ вывода</button>
    </div>
  );
};
