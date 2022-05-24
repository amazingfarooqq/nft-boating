import * as React from "react";
import { Button } from "react-bootstrap";

import Apr from "./Months/Apr/Apr";
import Aug from "./Months/Aug/Aug";
import Feb from "./Months/Feb/Feb";
import Jan from "./Months/Jan/Jan";
import Jul from "./Months/Jul/Jul";
import Jun from "./Months/Jun/Jun";
import Mar from "./Months/Mar/Mar";
import May from "./Months/May/May";
import Nov from "./Months/Nov/Nov";
import Oct from "./Months/Oct/Oct";
import Sep from "./Months/Sep/Sep";

const Calander = () => {
  const [show, setShow] = React.useState(0);
  function set() {}
  return (
    <div className=" mt-5" style={{ textAlign: "center", marginBottom: "-5rem" }}>
      <Button
        to="jan"
        className="btn"
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(1);
        }}
      >
        Jan
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(2);
        }}
      >
        Feb
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(3);
        }}
      >
        Mar
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(4);
        }}
      >
        Apr
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(5);
        }}
      >
        May
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(6);
        }}
      >
        Jun
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(7);
        }}
      >
        Jul
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(8);
        }}
      >
        Aug
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(9);
        }}
      >
        Sep
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(10);
        }}
      >
        Oct
      </Button>

      <Button
        style={{ width: "4rem", textAlign: "center", margin: "0.5rem" }}
        onClick={() => {
          setShow(11);
        }}
      >
        Nav
      </Button>
      <br />
      {show == 1 ? (
        <Jan />
      ) : (
        <>
          {show == 2 ? (
            <Feb />
          ) : (
            <>
              {show == 3 ? (
                <Mar />
              ) : (
                <>
                  {show == 4 ? (
                    <Apr />
                  ) : (
                    <>
                      {show == 5 ? (
                        <May />
                      ) : (
                        <>
                          {show == 6 ? (
                            <Jun />
                          ) : (
                            <>
                              {show == 7 ? (
                                <Jul />
                              ) : (
                                <>
                                  {show == 8 ? (
                                    <Aug />
                                  ) : (
                                    <>
                                      {show == 9 ? (
                                        <Sep />
                                      ) : (
                                        <>
                                          {show == 10 ? (
                                            <Oct />
                                          ) : (
                                            <>
                                              {show == 11 ? (
                                                <Nov />
                                              ) : (
                                                <div
                                                  style={{
                                                    marginTop: "3rem",
                                                    color: "white",
                                                  }}
                                                >
                                                  <h1>Please Select Month</h1>
                                                </div>
                                              )}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Calander;
