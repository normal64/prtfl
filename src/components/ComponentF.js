import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Header, Segment, Icon } from "semantic-ui-react";
import "../styles/ComponentF.scss"

const ComponentF = () => {
  return (
    <Grid centered columns={2} id="ComponentF">
      <Grid.Row centered columns={3} >
        <Grid.Column
        // width={4}
        >
          <Header size="huge">Get In Touch</Header>
          <p>
            I’m open for  new opportunities, Whether you have a question or just want to
            say hi, I’ll try my best to get back to you! If you are looking for a good employee pick then you are in the right place
          </p>
          <a className="offer-link" href = "mailto: 1234@example.com"> Send Mail</a>
          <p className="made-by" >by Denis Poplavskii</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ComponentF;
