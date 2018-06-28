import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "profile",
      activeItem: null
    };
  }

  componentDidMount() {
    this.setState({
      activeItem: document.querySelector(".active")
    });
  }

  filters = {
    profile: <Profile />,
    photo: <Photos />,
    cocktail: <Cocktails />,
    pokemon: <Pokemon />
  };

  setFilter = e => {
    this.state.activeItem.classList.remove("active");
    this.setState({
      activeItem: e.target,
      filter: e.target.id
    });
    e.target.classList.add("active");
  };

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.filters[this.state.filter]}</div>;

    return (
      <div id="main-box">
        <MenuBar setFilter={this.setFilter} />
        {detailsToDisplay}
      </div>
    );
  }
}

export default MainBox;
