import { MaxUint256 } from "@ethersproject/constants";
import { parseEther } from "@ethersproject/units";
import { BigNumber, ethers } from "ethers";

export function toWei(n) {
  // const m = toBN(n);
  return parseEther(n);
}

export function fromWei(n) {
  return parseFloat(ethers.utils.formatEther(n));
}

export function toBN(num) {
  return BigNumber.from(num);
}

export function changeToDate(n) {
  if (n >= 1 && n <= 31) {
    console.log("Janauary", n);
    return 1, n;
  } else if (n > 31 && n <= 59) {
    let nb = n - 31;
    console.log("Febaury", nb);
    return 2, nb;
  } else if (n > 59 && n <= 90) {
    let nb = n - 59;
    console.log("March", nb);
    return 3, nb;
  } else if (n > 90 && n <= 120) {
    let nb = n - 90;
    console.log("April", nb);
    return 4, nb;
  } else if (n > 120 && n <= 151) {
    let nb = n - 120;
    console.log("May", nb);
    return 5, nb;
  } else if (n > 151 && n <= 181) {
    let nb = n - 151;
    console.log("June", nb);
    return 6, nb;
  } else if (n > 181 && n <= 212) {
    let nb = n - 181;
    console.log("July", nb);
    return 7, nb;
  } else if (n > 212 && n <= 243) {
    let nb = n - 212;
    console.log("August", nb);
    return 8, nb;
  } else if (n > 243 && n <= 273) {
    let nb = n - 243;
    console.log("September", nb);
    return 9, nb;
  } else if (n > 273 && n <= 304) {
    let nb = n - 273;
    console.log("Octobar", nb);
    return 10, nb;
  } else if (n > 304 && n <= 334) {
    let nb = n - 304;
    console.log("November");
    return 11, nb;
  } else if (n > 334 && n <= 365) {
    let nb = n - 334;
    console.log("December", nb);
    return 12, nb;
  }
}

export function changeToDateSingle(n) {
  if (n >= 1 && n <= 31) {
    console.log(n);
    return n;
  } else if (n > 31 && n <= 59) {
    let nb = n - 31;
    console.log(nb);
    return nb;
  } else if (n > 59 && n <= 90) {
    let nb = n - 59;
    console.log(nb);
    return nb;
  } else if (n > 90 && n <= 120) {
    let nb = n - 90;
    console.log(nb);
    return nb;
  } else if (n > 120 && n <= 151) {
    let nb = n - 120;
    console.log(nb);
    return nb;
  } else if (n > 151 && n <= 181) {
    let nb = n - 151;
    console.log(nb);
    return nb;
  } else if (n > 181 && n <= 212) {
    let nb = n - 181;
    console.log(nb);
    return nb;
  } else if (n > 212 && n <= 243) {
    let nb = n - 212;
    console.log(nb);
    return nb;
  } else if (n > 243 && n <= 273) {
    let nb = n - 243;
    console.log(nb);
    return nb;
  } else if (n > 273 && n <= 304) {
    let nb = n - 273;
    console.log(nb);
    return nb;
  } else if (n > 304 && n <= 334) {
    let nb = n - 304;
    console.log(nb);
    return nb;
  } else if (n > 334 && n <= 365) {
    let nb = n - 334;
    console.log(nb);
    return nb;
  }
}

export function changeToDay(n, m) {
  var c = Number(m);
  if (c > 12 && c < 1) {
    alert("Please Endter Valid Month!");
    return null;
  }
  if (m > 31 && m < 1) {
    alert("Please Enter Valid Date");
    return null;
  }
  // const num = Number(n);
  if (n === 1) {
    return c;
  } else if (n === 2) {
    let nb = c + 31;
    return nb;
  } else if (n === 3) {
    let nb = c + 59;
    return nb;
  } else if (n === 4) {
    let nb = c + 90;
    return nb;
  } else if (n === 5) {
    let nb = c + 120;
    return nb;
  } else if (n === 6) {
    let nb = c + 151;
    return nb;
  } else if (n === 7) {
    let nb = c + 181;
    return nb;
  } else if (n === 8) {
    let nb = c + 212;
    return nb;
  } else if (n === 9) {
    let nb = c + 243;
    return nb;
  } else if (n === 10) {
    let nb = c + 273;
    return nb;
  } else if (n === 11) {
    let nb = c + 304;
    return nb;
  } else if (n === 12) {
    c = c + 334;
    let nb = c;
    return nb;
  }
}

export const MAX_UINT256 = MaxUint256;

export function calculateGasMargin(value) {
  return value.mul(BigNumber.from(10000 + 2000)).div(BigNumber.from(10000));
}

// account is not optional
export function getSigner(library, account) {
  return library.getSigner(account);
}
