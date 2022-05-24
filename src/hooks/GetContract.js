import { ethers } from "ethers";

import { boatAddress } from "../components/SmartContract/addresses";
import boatAbi from "../components/SmartContract/boatAbi.json";

export function GetProvider() {
  const provider = new ethers.providers.Web3Provider(
    window.ethereum
  ).getSigner();
  return provider;
}

export function GetContract() {
  const provider = GetProvider();
  const contract = new ethers.Contract(boatAddress, boatAbi, provider);
  return contract;
}
