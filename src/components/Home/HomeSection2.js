import React from "react";
import { Card } from "react-bootstrap";

export const HomeSection2 = () => {
  return (
    <div className="row justify-content-center my-5">
      <h2 className="col-12 text-center fw-bold py-3" style={{ fontSize: "80px" }}>
          Part of <span className="text-danger">Nft boating</span>
      </h2>

      <div className="col-12">
          <div className="row justify-content-center">

        <Card
          
          key="light"
          text="dark"
          style={{ width: "18rem" , background: 'white' }}
          className="col-9 col-lg-5 col-xl-3 m-1 text-center"
        >
          <Card.Header style={{background: 'white'}}>Header</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe similique, eveniet nesciunt voluptatibus vitae placeat autem cumque! Eveniet eum quidem consequuntur qui dolorum atque quasi molestiae nam nihil amet.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          
          key="light"
          text="dark"
          style={{ width: "18rem" , background: 'white' }}
          
          className="col-9 col-lg-5 col-xl-3 m-1 text-center"
        >
          <Card.Header style={{background: 'white'}}>Header</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe similique, eveniet nesciunt voluptatibus vitae placeat autem cumque! Eveniet eum quidem consequuntur qui dolorum atque quasi molestiae nam nihil amet.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          
          key="light"
          text="dark"
          style={{ width: "18rem" , background: 'white' }}
          
          className="col-9 col-lg-5 col-xl-3 m-1 text-center"
        >
          <Card.Header style={{background: 'white'}}>Header</Card.Header>
          <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe similique, eveniet nesciunt voluptatibus vitae placeat autem cumque! Eveniet eum quidem consequuntur qui dolorum atque quasi molestiae nam nihil amet.
            </Card.Text>
          </Card.Body>
        </Card>
          </div>
      </div>
    </div>
  );
};
