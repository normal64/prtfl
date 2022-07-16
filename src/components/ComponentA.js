import React,{useState} from 'react';
import "../styles/ComponentA.scss"
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
  } from 'semantic-ui-react'
  import image  from "../img/logo.png";
  
  window.onscroll = () => menuDisplay();
  let lastScrollTop = 0;
  const menuDisplay = () =>{
    let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    let menuRow = document.querySelector(".menu-row")
    if (st > lastScrollTop) {
      // downscroll code
      
      menuRow.classList.add("hide");
    } else {
      // upscroll code
      menuRow.classList.remove("hide");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }


const ComponentA = (props) => {
const [state, setState] = useState({ activeItem: 'home' })
const handleItemClick = (e, { name,customAttribute }) =>{
  console.log(`custom-attribute`, customAttribute);
  setState({ activeItem: name })
  const element = document.getElementById( customAttribute);
  element.scrollIntoView();
} 
const menuSections = ["Intro","About me","Work experience","Coding?","Contact","CV"]
    return (
        <Grid  className="component-a" columns={2} 
        verticalAlign='middle'  
        // stackable
        >
            <Grid.Row className="menu-row"> 
          <Grid.Column width={2} className="logo">
            <Image src={image} size='tiny' />
        
          </Grid.Column>

          <Grid.Column 
        //   width={4} 
        // columns='equal'
        mobile={16} tablet={8} computer={4}
          floated="right">
          <Menu color="black" 
          inverted fluid widths={6}>
          <Menu.Item
          name={menuSections[0]}
           active={state.activeItem === menuSections[0]}
           customAttribute="ComponentB"
         onClick={handleItemClick}
        />
           <Menu.Item
          name={menuSections[1]}
          active={state.activeItem === menuSections[1]}
          customAttribute="ComponentC"
        onClick={handleItemClick}
        />
        <Menu.Item
          name={menuSections[2]}
          active={state.activeItem === menuSections[2]}
          customAttribute="ComponentD"
        onClick={handleItemClick}
        />
         <Menu.Item
         name={menuSections[3]}
         active={state.activeItem === menuSections[3]}
         customAttribute="ComponentE"
       onClick={handleItemClick}
        />
         <Menu.Item
          name={menuSections[4]}
          active={state.activeItem === menuSections[4]}
          customAttribute="ComponentF"
        onClick={handleItemClick}
        />
        <Menu.Item
          name={menuSections[5]}
          active={state.activeItem === menuSections[5]}
        onClick={handleItemClick}
        />
        </Menu>

          </Grid.Column>
          </Grid.Row>
        </Grid>
    )
}

export default ComponentA
