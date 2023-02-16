import React from "react";
import { Grid, Image } from "semantic-ui-react";
import "../styles/ComponentE.scss";
import { Header, Segment, Icon } from "semantic-ui-react";
const projects = [
  {
    github: "https://github.com/normal64/ExpenseTracker",
    liveURL: "https://normal64.github.io/ExpenseTracker/",
    tinyHeader: "React redux project",
    hugeHeader: "Expense tracker",
    projectDescription:
      "A minimalistic app to track expenses. Was created in order to practice React hooks, React/Redux and to be nice looking.",
    techStack: "VS Code React Redux Semantic UI",
  },
  {
    github: "https://github.com/normal64/ValoranProject",
    liveURL: "https://codepen.io/DeanWinchester88/full/LYjmgyQ",
    tinyHeader: "API practice project",
    hugeHeader: "API Valorant",
    projectDescription:
      "An API based project PC games related but i haven't played this game. However characters looking nice it was fun to make and it's  fun to click around ",
    techStack: "API Semantic UI",
  },
  {
    github: "https://github.com/normal64/ownTwitter",
    liveURL: "https://normal64.github.io/ownTwitter",
    tinyHeader: "Network clone",
    hugeHeader: "Own Twitter",
    projectDescription:
      "Twitter is very popular nowdays and its fun to build own version. Cool thing is that there always things to add and to update. Good one to practice React/Redux and Json server ",
    techStack: "VS Code JSON Server React Redux Semantic UI",
  },
  {
    github: "https://github.com/normal64/PokeAPI",
    liveURL: "https://codepen.io/DeanWinchester88/full/ExvxdxX",
    tinyHeader: "Be like API and Rest",
    hugeHeader: "Pokemon API",
    projectDescription:
      "Every developer needs  experience with API and everyone likes Pokemon and then its the time and place to combine both!",
    techStack: "JS API",
  },
  {
    github: "https://github.com/normal64/NailsOnePager",
    liveURL: "https://codepen.io/DeanWinchester88/full/mdMwBJq",
    tinyHeader: "All about the nails",
    hugeHeader: "Nails web page",
    projectDescription:
      "Always good to make a page for popular nowdays topic. All about the nails and its design",
    techStack: "HTML CSS JS",
  },
  {
    github: "https://github.com/normal64/MyCSSface",
    liveURL: "https://codepen.io/DeanWinchester88/full/QWMaxJQ",
    tinyHeader: "inspired by Kyle webdev",
    hugeHeader: "My web face",
    projectDescription:
      "You simply can't go too much graphic, sometimes it's nice to switch to something visual",
    techStack: "HTML CSS ",
  },
  {
    github: "https://github.com/normal64/jokes-for-FUN",
    liveURL: "https://jokes-for-fun.vercel.app/",
    tinyHeader: "Hope you'll find some funny ones",
    hugeHeader: "Such a joke",
    projectDescription: "Jokes generated for you",
    techStack: "HTML CSS  API REACT NEXT",
  },
];
const renderProject = (
  github,
  liveURL,
  tinyHeader,
  hugeHeader,
  projectDescription,
  techStack
) => {
  return (
    <Grid.Row centered columns={3}>
      <Grid.Column
      // width={4}
      >
        <iframe className="preview" src={liveURL}>
          <p>Your browser does not support iframes.</p>
        </iframe>
      </Grid.Column>
      <Grid.Column>
        <Header size="tiny">{tinyHeader}</Header>
        <Header size="huge">{hugeHeader}</Header>
        <Segment className="project-description">{projectDescription}</Segment>
        <Header className="tech-stack" size="tiny">
          {techStack}
        </Header>

        <a href={github}>
          <Icon className="iconUI" name="github" />{" "}
        </a>
        <a href={liveURL}>
          <Icon className="iconUI" name="edge" />
        </a>
      </Grid.Column>
    </Grid.Row>
  );
};
const renderProjects = () => {
  return projects.map((elem) =>
    renderProject(
      elem.github,
      elem.liveURL,
      elem.tinyHeader,
      elem.hugeHeader,
      elem.projectDescription,
      elem.techStack
    )
  );
};
const ComponentE = (props) => {
  return (
    <Grid centered columns={2} id="ComponentE">
      <Header size="huge">
        Some projects i've done on the road to experience
      </Header>
      {renderProjects()}
    </Grid>
  );
};

export default ComponentE;
