import { BigNumber } from "ethers";

import { changeToDateSingle } from "../utils/Index";
import { GetContract, GetProvider } from "./GetContract";

export let ar = [];
export const a = [1, 2, 3, 4, 5];
export const b = [6, 7, 8, 9, 10];
export const c = [11, 12, 13, 14, 15];
export const d = [16, 17, 18, 19, 20];
export const e = [21, 22, 23, 24, 25];
export const f = [26, 27, 28, 29, 30];
export const g = [31];
export const h = [];
export const completeArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
export const April = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30
];

export const June = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30
];


export const November = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30
];

export const September = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30
];


export const February = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28
];

export async function getMinted(m, d) {
  const provider = GetProvider();
  const Contract = GetContract();
  const id = await Contract.connect(provider).checkIdByDate(m, d);

  return id;
}

export async function fetchered(m) {
  // setIsLoading(true);
  for (let i = 0; i < 31; i++) {
    const bn = await getMinted(m, i);
    const num = BigNumber.from(bn).toString();
    if (num !== 0) {
      const date = changeToDateSingle(num);
      console.log(date);
      return date;
    }
  }
  // setIsLoading(false);
}
