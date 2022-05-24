import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContextAPI } from "../ContextAPI";
import { IntegrationWallets } from "../subComponents/IntegrationWallets";
import { MessageBox } from "../subComponents/MessageBox";
import {
  CoinbaseWallet,
  fortmatic,
  Injected,
  portis,
} from "../wallets/Connectors";

import "./header.css";

export const Header = () => {
  const [messageBoxColor, setMessageBoxColor] = useState();

  const {
    userInfo,
    setUserInfo,
    active,
    activate,
    deactivate,
    account,
    chainId,
  } = useContextAPI();

  async function conToMetaMask() {
    if (typeof window.ethereum == "undefined") {
      alert("MetaMask is Not installed!");
    }
    await activate(Injected);
    setMessageBoxColor("success");
  }

  const disconnect = async () => {
    deactivate(Injected);

    setMessageBoxColor("danger");
  };

  const logout = () => {
    disconnect();
    sessionStorage.removeItem("userinfo");
    setUserInfo("");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand >
          <Link
            style={{ textDecoration: "none", fontSize: "40px" }}
            className="text-dark fw-bold"
            to="/"
          >
            Nft boating
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Link className="btn btn-light px-1" to="/">
                Home
              </Link>

            <NavDropdown title="Buy" id="basic-nav-dropdown">
              <Link className="btn px-1" to="/calender">
                calender
              </Link>
              <br />
              <Link className="btn px-1" to="/input">
                Input
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className="navbar-nav">
              {active ? (
                <button
                  className="btn btn-danger py-2"
                  title="Disconnect From Wallet"
                  onClick={disconnect}
                >{`${account.slice(0, 5)}...${account.slice(-5)}`}</button>
              ) : (
                <IntegrationWallets
                  connectToMetaMask={conToMetaMask}
                  connectToCoinBase={() => {
                    activate(CoinbaseWallet);
                  }}
                  connectToPortis={() => {
                    activate(portis);
                  }}
                  connectToFortmatic={() => {
                    activate(fortmatic);
                  }}
                />
              )}
              {messageBoxColor === "success" && (
                <MessageBox
                  setMessageBoxColor={setMessageBoxColor}
                  color={messageBoxColor}
                  MessageTitle="Wallet Connected"
                  Message="Your wallet has been connected successfully"
                />
              )}
              {messageBoxColor === "danger" && (
                <MessageBox
                  setMessageBoxColor={setMessageBoxColor}
                  color={messageBoxColor}
                  MessageTitle="Wallet Disconnected"
                  Message="Your wallet has been disconnected successfully"
                />
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
