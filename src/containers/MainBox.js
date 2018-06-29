import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "profile"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ activeSection: e.target.parentElement.id });
  }

  menuSelection() {
    if (this.state.activeSection === "profile") {
      return <Profile />;
    } else if (this.state.activeSection === "photo") {
      return <Photos />;
    } else if (this.state.activeSection === "cocktail") {
      return <Cocktails />;
    } else {
      return <Pokemon />;
    }
  }

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>;

    return (
      <div>
        <MenuBar
          handleClick={this.handleClick}
          activeSection={this.state.activeSection}
        />
        {this.menuSelection()}
      </div>
    );
  }
}

export default MainBox;
