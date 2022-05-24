import { useWeb3React } from "@web3-react/core";
import { Alert } from "bootstrap";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { changeToDay, fromWei, toWei } from "../../utils/Index";
import { boatAddress, usdtAddress } from "../SmartContract/addresses";
import boatAbi from "../SmartContract/boatAbi.json";
import usdtAbi from "../SmartContract/usdtAbi.json";

const Input = () => {
  const { account } = useWeb3React();
  const [balance, setBalance] = useState();
  const [cPrice, setCPrice] = useState();
  const provider = new ethers.providers.Web3Provider(
    window.ethereum
  ).getSigner();
  const UsdtContract = new ethers.Contract(usdtAddress, usdtAbi, provider);
  const BoatContract = new ethers.Contract(boatAddress, boatAbi);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function priceFetcher() {
    const pr = await BoatContract.connect(provider).currentPrice();
    const pri = fromWei(BigNumber.from(pr).toString());
    setCPrice(pr);
  }

  priceFetcher();

  const onSubmit = async (data) => {
    let n = changeToDay(data.month, data.day);
    let month = Number(data.month);
    let date = Number(data.day);
    let pp = BigNumber.from(cPrice).toString();
    console.log(n, month, date, pp);
    const minted = await BoatContract.connect(provider).checkNotAvailabelDate(
      n
    );
    if (!minted) {
      await BoatContract.connect(provider).buyDateOfBirth(n, month, date, pp);
    } else {
      alert("Already Minted !");
    }
  };

  useEffect(() => {
    async function balanceCheck() {
      const bal = await UsdtContract.connect(provider).balanceOf(account);
      const balan = fromWei(BigNumber.from(bal).toString());
      console.log(balan);
      setBalance(balan);
    }
    balanceCheck();
  }, [3000, account]);

  return (
    <div className="m-auto " style={{ width: "20rem" }}>
      <Card>
        <div className="m-lg-auto ">
          <h3 style={{ marginTop: "1rem" }} className="text-center">
            Buy your Day
          </h3>
        </div>
        <hr style={{ marginLeft: "1rem", marginRight: "1rem" }} />
        <div className="m-lg-auto ">
          <h3 className="text-center">Your Balance</h3>
          <h1 className="text-center ">${balance}</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <div className="container text-center">
            <div className="row">
              <div className="col-6 ">
                <input
                  type="number"
                  {...register("month", {
                    required: true,
                    maxLength: 2,
                    min: 1,
                    max: 12,
                  })}
                  className="text-center"
                  placeholder="Month"
                  style={{ width: "50%" }}
                />
                {errors.month?.type === "required" &&
                  "Please Enter Valid Month"}
              </div>
              <div className="col-6">
                <input
                  type="number"
                  {...register("day", {
                    required: true,
                    maxLength: 2,
                    min: 1,
                    max: 31,
                  })}
                  className="text-center"
                  placeholder="Day"
                  style={{ width: "50%" }}
                />
                {errors.month?.type === "required" && "Please Enter Valid Date"}
              </div>
            </div>
          </div>
          <Button
            type="submit"
            style={{ margin: "1rem", padding: "auto", width: "40%" }}
          >
            Buy
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Input;
