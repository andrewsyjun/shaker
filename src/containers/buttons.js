import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Button, ButtonGroup, Row, Col } from "reactstrap";

import "../App.css";
import { newNumEntry } from "../actions/newNumEntry";
import { fillNumEntry } from "../actions/fillNumEntry";
import { deleteNumEntry } from "../actions/deleteNumEntry";
import { findNumEntry } from "../actions/findNumEntry";
import { insertNumEntry } from "../actions/insertNumEntry";

class Buttons extends Component {
  handleOnClick = e => {
    this.props.newNumEntry(this.props.numberEntry);
  };

  render() {
    return (
      <div>
        <Button color="primary" className="button" onClick={this.handleOnClick}>
          New
        </Button>{" "}
        <Button
          color="primary"
          className="button"
          onClick={() => this.props.fillNumEntry()}
        >
          Fill
        </Button>{" "}
        <Button
          color="primary"
          className="button"
          onClick={() => this.props.insertNumEntry()}
        >
          Insert
        </Button>{" "}
        <Button
          color="primary"
          className="button"
          onClick={() => this.props.findNumEntry()}
        >
          Find
        </Button>{" "}
        <Button
          color="primary"
          className="button"
          onClick={() => this.props.deleteNumEntry()}
        >
          Delete
        </Button>
      </div>
    );
  }
}
// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render

function mapStateToProps(state) {
  return {
    numberEntry: state.numberEntry
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ newNumEntry: newNumEntry }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Buttons);
