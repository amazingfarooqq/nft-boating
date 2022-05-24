import { ethers } from "ethers";

import { usdtAddress } from "../components/SmartContract/addresses";
import usdtAbi from "../components/SmartContract/usdtAbi.json";

export function GetProvider() {
  const provider = new ethers.providers.Web3Provider(
    window.ethereum
  ).getSigner();
  return provider;
}

export function GetUsdtContract() {
  const provider = GetProvider();
  const contract = new ethers.Contract(usdtAddress, usdtAbi, provider);
  return contract;
}
