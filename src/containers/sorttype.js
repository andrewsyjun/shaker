import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Col
} from "reactstrap";

class SortType extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Sorting Algorithm</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Quick</DropdownItem>
          <DropdownItem>Merge</DropdownItem>
          <DropdownItem>Insert</DropdownItem>
          <DropdownItem>Recursive</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default SortType;
