import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";

import { usdtAddress } from "../components/SmartContract/addresses";
import usdtAbi from "../components/SmartContract/usdtAbi.json";
import { fromWei } from "../utils/Index";

export async function GetBalanceUsdt() {
  const { account } = useWeb3React();
  const provider = new ethers.providers.Web3Provider(
    window.ethereum
  ).getSigner();
  const contract = new ethers.Contract(usdtAddress, usdtAbi, provider);
  const bal = await contract.balanceOf(account);
  console.log(bal);
  const balance = fromWei(BigNumber.from(bal).toString());
  return balance;
}
