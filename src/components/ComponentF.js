import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Header, Segment, Icon } from "semantic-ui-react";
import "../styles/ComponentF.scss";

const ComponentF = () => {
  return (
    <Grid centered columns={2} id="ComponentF">
      <Grid.Row centered columns={2}>
        <Grid.Column className="touch-container">
          <Header size="huge" className="touch">
            <span style={{ "--i": 1 }}>G</span>
            <span style={{ "--i": 2 }}>e</span>
            <span style={{ "--i": 3 }}>t</span> &nbsp;
            <span style={{ "--i": 4 }}>i</span>
            <span style={{ "--i": 5 }}>n</span>&nbsp;
            <span style={{ "--i": 6 }}>t</span>
            <span style={{ "--i": 7 }}>o</span>
            <span style={{ "--i": 8 }}>u</span>
            <span style={{ "--i": 9 }}>c</span>
            <span style={{ "--i": 10 }}>h</span>
          </Header>
          <p>
            I’m open for new opportunities, Whether you have a question or just
            want to say hi, contact me so i can get back to you! <br />
            If you are looking for a good employee pick then you are in the
            right place
          </p>
          <a className="offer-link" href="mailto: normal64@mail.ru">
            {" "}
            Send Mail
          </a>
          <a className="offer-link" href="mailto: normal6488@gmail.com">
            {" "}
            Send GMail
          </a>
          <p className="made-by">by Denis Poplavskii</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ComponentF;
