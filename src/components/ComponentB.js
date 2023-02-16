import React from "react";
import { Grid, Header,Icon } from "semantic-ui-react";
import "../styles/ComponentB.scss";

const ComponentB = () => {
  return (
    
        
      <Grid id="ComponentB" centered columns={2}>
        <Grid.Column>
        
          <Header as="h4" className="header-intro">Hi, my name is</Header>
          <Header as="h1" className="header-name">Denis Poplavskii</Header>
          
          <Header as="h3" className="header-description">
          I’m a motivated, curious  front end developer. 
          Currently, focused on front end aspects in order to master it.
          </Header>
          
        </Grid.Column>
      </Grid>
    
  );
};

export default ComponentB;
