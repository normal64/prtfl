import React from "react";
import { Grid, GridRow, Header, Image, Icon, List } from "semantic-ui-react";
import denis from "../img/Denis.jpg";
import "../styles/ComponentC.scss"

const ComponentC = () => {
  return (
    <Grid
    id="ComponentC"
    //  columns={3}
    //  centered
    >
      <Grid.Row columns={2} centered>
        <Grid.Column floated="left">
          <Header as="h1">About me</Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={4} centered>
        <Grid.Column
          width={4}
          // floated='left'
        >
          <p>
          Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive product
          </p>
          <br />
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>
          Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation
          </p>
          Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, 
          <Grid.Row columns={6} centered>
            <Grid.Column>
              <List horizontal>
                <List.Item as="a">
                  <List.Content>
                  <List.Header><Icon className="iconUI"  color='red' name="angle right" />HTML</List.Header>
                  <List.Header><Icon className="iconUI"  color='red' name="angle right" />CSS</List.Header>
                  <List.Header><Icon className="iconUI"  color='red' name="angle right" />JavaScript</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item as="a">
                  <List.Content>
                  <List.Header ><Icon className="iconUI"  color='red' name="angle right" />React</List.Header>
                  <List.Header><Icon className="iconUI" color='red'  name="angle right" />React-Redux</List.Header>
                  <List.Header><Icon className="iconUI" color='red'  name="angle right" />API</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column columns={4}>
          <Image src={denis} size="medium" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ComponentC;
