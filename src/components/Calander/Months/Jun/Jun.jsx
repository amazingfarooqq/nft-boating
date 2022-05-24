import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import { getStatic } from "ethers/lib/utils";
import { useEffect, useState } from "react";

import { GetContract, GetProvider } from "../../../../hooks/GetContract";
import { June, getMinted } from "../../../../hooks/GetMinted";
import { GetUsdtContract } from "../../../../hooks/GetUsdtContract";
import {
  MAX_UINT256,
  calculateGasMargin,
  changeToDate,
  changeToDay,
  getSigner,
  toWei,
} from "../../../../utils/Index";
import { boatAddress } from "../../../SmartContract/addresses";
import "../index.css";

let ar = [];

const Jun = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contract, setContract] = useState();
  const [usdtContract, setUsdtContract] = useState();
  const [provider, setProvider] = useState();
  const [cPrice, setCPrice] = useState();
  const { account, library } = useWeb3React();

  async function fetcher(m) {
    setIsLoading(true);
    for (let i = 0; i < 31; i++) {
      const bn = await getMinted(m, i);
      const num = BigNumber.from(bn).toString();
      if (num !== 0) {
        const date = changeToDate(num);
        ar.push(date);
        console.log(ar);
      }
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetcher(6);
    const prov = GetProvider();
    setProvider(prov);
    const cont = GetContract();
    setContract(cont);
    const usdt = GetUsdtContract();
    setUsdtContract(usdt);

    async function priceFetcher() {
      const pr = await cont.connect(prov).currentPrice();
      const pri = BigNumber.from(pr).toString();
      console.log("big number error: ", pri);
      setCPrice(pri);
    }
    priceFetcher();
  }, [4000]);

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="head ">
          <h3 className="card heading">June</h3>
          <div className="card calander" style={{ borderRadius: "30px" }}>
            <div className="container">
              <div className="row " style={{ border: "groove" }}>
                {June.map((e) => (
                  <div
                    className="col-lg-6"
                    style={{
                      border: "groove",
                      justifyContent: "center",
                      width: "3rem",
                      margin: "2rem",
                    }}
                  >
                    {e == ar[e] ? (
                      <div className="text-danger" style={{ fontSize: "2rem" }}>
                        X
                      </div>
                    ) : (
                      
                      <div
                        className="btn"
                        onClick={async () => {
                          // const signer = getSigner(library, account);
                          const n = changeToDay(6, e);
                          console.log("clicked ", n, 6, e, cPrice);
                          const value = await usdtContract.allowance(account, boatAddress);
                          const val = (value.gt(0));
                          console.log("value is :",value, "val :", val);
                          if(val ){
                            await contract.buyDateOfBirth(n, 6, e, cPrice);
                          }else{
                            const tx = await usdtContract.approve(boatAddress, cPrice);
                            const receipt = await tx.wait()
                            console.log(receipt.status)
                            await contract.buyDateOfBirth(n, 6, e, cPrice);
                          }
                        }}
                      >
                        {e}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Jun;
