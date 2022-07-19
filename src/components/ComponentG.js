import React from "react";
import "../styles/ComponentG.scss";
import { List } from "semantic-ui-react";

const ComponentG = () => {
  return (
    <div className="vertical-menu">
      <List>
        <List.Item>
        <List.Content className="list-content">
        <a href="https://github.com/normal64">
        <List.Icon size="big" className="iconUI animated" name="github" > </List.Icon>
        </a>
        </List.Content>
        </List.Item>
        <List.Item>
        <List.Content className="list-content">
        <a href="https://www.instagram.com/quoi_ma_gueule/">
        <List.Icon size="big" className="iconUI animated" name="instagram" > </List.Icon>
        </a>
        </List.Content>
          
        </List.Item>
        <List.Item>
        <List.Content className="list-content">
        <a href="https://www.linkedin.com/in/denis-poplavskii-85525219a/">
        <List.Icon size="big" className="iconUI animated" name="linkedin" > </List.Icon>
        </a>
        </List.Content>
          
        </List.Item>
        <List.Item>
        <List.Content className="list-content">
        <a href="https://www.codewars.com/users/normal64">
        <List.Icon size="big" className="iconUI animated" name="code" > </List.Icon>
        </a>
        </List.Content>
          
        </List.Item>
      </List>
      
    </div>
  );
};

export default ComponentG;
