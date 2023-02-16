import React, { useState } from "react";
import { Grid, GridRow, Header, Image, Icon, List } from "semantic-ui-react";
import { Menu, Segment } from "semantic-ui-react";
import "../styles/ComponentD.scss";

const ComponentD = () => {
  const [state, setState] = useState({ activeItem: "" });
  const handleItemClick = (e, { name }) => setState({ activeItem: name });

  const renderExp = () => {
    console.log(`state.activeItem`, state.activeItem);
    switch (state.activeItem) {
      case "Cool position":
        return (
          <>
            <Header as="h2" className="job-description offer">
              Here might be your wonderful offer
            </Header>
            <br />
            <a className="offer-link" href="mailto: normal64@mail.ru">
              {" "}
              Send Mail
            </a>
            <br />
            <a className="offer-link" href="mailto:normal6488@gmail.com">
              {" "}
              Send GMail
            </a>
          </>
        );
      case "Majorel":
        return (
          <>
            <Header as="h2" className="job-description">
              Senior content reviewer{" "}
              <a className="job-link" href="https://www.majorel.com/">
                @Majorel
              </a>
            </Header>
            <Header as="h5" className="job-description">
              August 2021 - Present
            </Header>
            <p className="job-desc-long">
              Responsible for evaluating online social media, web page content
              and advertising content in conjunction with client policy.
            </p>
          </>
        );
      case "VoithHydro":
        return (
          <>
            <>
              <Header as="h2" className="job-description">
                Interpreter{" "}
                <a
                  className="job-link"
                  href="https://voith.com/corp-en/index.html"
                >
                  @VoithHydro
                </a>
              </Header>
              <Header as="h5" className="job-description">
                May 2014 - August 2021
              </Header>
              <p className="job-desc-long">
                Responsible for translation of documents and on-site translation
                during Hydro Power plant refurbishment. After some time also
                received HSE responsibilities. Last couple of years on the
                project did assistance to senior surveyor.
              </p>
            </>
          </>
        );
      case "Long product mill Severstal":
        return (
          <>
            <Header as="h2" className="job-description">
              Interpreter{" "}
              <a className="job-link" href="https://severstal.com/global/">
                @Severstal
              </a>
            </Header>
            <Header as="h5" className="job-description">
              October 2013 - April 2014
            </Header>
            <p className="job-desc-long">
              Responsible for translation of documents and on-site translation
              during construction and commissioning of Long Product mill.
            </p>
          </>
        );
    }
  };

  return (
    <Grid columns={2} centered id="ComponentD">
      <Grid.Column columns={2} centered className="floated-column">
        <Grid.Column floated="left">
          <Header as="h1">Work Expirience</Header>
        </Grid.Column>
        <Grid.Column>
          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name="Cool position"
                  active={state.activeItem === "Cool position"}
                  onClick={(e, name) => handleItemClick(e, name)}
                />
                <Menu.Item
                  name="Majorel"
                  active={state.activeItem === "Majorel"}
                  onClick={(e, name) => handleItemClick(e, name)}
                />
                <Menu.Item
                  name="VoithHydro"
                  active={state.activeItem === "VoithHydro"}
                  onClick={(e, name) => handleItemClick(e, name)}
                />
                <Menu.Item
                  name="Long product mill Severstal"
                  active={state.activeItem === "Long product mill Severstal"}
                  onClick={(e, name) => handleItemClick(e, name)}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment className="job-description">{renderExp()}</Segment>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Column>
    </Grid>
  );
};

export default ComponentD;
