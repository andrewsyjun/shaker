import React, { Component } from "react";

import { Button, ButtonGroup, Row, Col } from "reactstrap";
import "../App.css";

class DupFilter extends Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <Row>
        <Button
          color="primary"
          onClick={() => this.onRadioBtnClick(1)}
          active={this.state.rSelected === 1}
        >
          Dups OK
        </Button>
        <Button
          color="primary"
          onClick={() => this.onRadioBtnClick(2)}
          active={this.state.rSelected === 2}
        >
          No dups
        </Button>
      </Row>
    );
  }
}

export default DupFilter;
