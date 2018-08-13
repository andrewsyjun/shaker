import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Buttons from "./containers/buttons";
import SortType from "./containers/sorttype";
import DupFilter from "./containers/dupfilter";
import Entry from "./containers/entry";
import Output from "./containers/output";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="rowFilter">
          <Col lg="5" className="colEntry1">
            <Buttons />
          </Col>
          <Col lg="3" className="colEntry2">
            <DupFilter />
          </Col>
          <Col lg="4" className="colEntry3">
            <Entry className="colEntry3" />
          </Col>
        </Row>
        <Row className="rowSortType">
          <Col className="sortTypePane">
            <SortType />
          </Col>
        </Row>
        <Row className="outputPane">
          <Col lg="12">
            <Output />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
