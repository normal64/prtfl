import React from "react";
import { Grid, GridRow, Header, Image, Icon, List } from "semantic-ui-react";
import denis from "../img/Denis.jpg";
import "../styles/ComponentC.scss";

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
          className="about-me-text-part"
          // floated='left'
        >
          <p>
            Fast-forward to today, and I’ve been working in coorporation,
            factories, offices and this great experience builded up my person.
          </p>
          <br />
          <p>
            Possesing an ultimate "can do" attitude and upbeat personality helps me to grow and my motivation is natural which is essential thing.
          </p>
          <p>
            Be highly competent, responsible is my goal and i believe that add to office or company morale.
          </p>
          Tend to take initiative beyond expected parameters of the job. 
          Organized and well disciplined whose i do consider my best pros.
          <br />
        
          <Grid.Row columns={6} centered>
            <Grid.Column>
              <List horizontal>
                <List.Item as="a">
                  <List.Content>
                    <List.Header>
                      <Icon className="iconUI" color="red" name="angle right" />
                      HTML
                    </List.Header>
                    <List.Header>
                      <Icon className="iconUI" color="red" name="angle right" />
                      CSS
                    </List.Header>
                    <List.Header>
                      <Icon className="iconUI" color="red" name="angle right" />
                      JavaScript
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item as="a">
                  <List.Content>
                    <List.Header>
                      <Icon className="iconUI" color="red" name="angle right" />
                      React
                    </List.Header>
                    <List.Header>
                      <Icon className="iconUI" color="red" name="angle right" />
                      React-Redux
                    </List.Header>
                    <List.Header>
                      <Icon className="iconUI" color="red" name="angle right" />
                      API
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column columns={4}>
          <Image src={denis} size="medium" className="my-photo" />
          <div className="empty"></div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ComponentC;
