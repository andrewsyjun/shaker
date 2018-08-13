import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Modal from "react-responsive-modal";

import { Container, Button, ButtonGroup, Row, Col } from "reactstrap";

import "../App.css";
import { newNumEntry } from "../actions/newNumEntry";
import { fillNumEntry } from "../actions/fillNumEntry";
import { deleteNumEntry } from "../actions/deleteNumEntry";
import { findNumEntry } from "../actions/findNumEntry";
import { insertNumEntry } from "../actions/insertNumEntry";
import { open } from "../actions/open";

class Buttons extends Component {
  open = () => {
    this.props.open(true);
  };

  onCloseModal = () => {
    this.props.open(false);
  };

  handleOnClickNew = e => {
    this.props.newNumEntry(
      this.props.numberEntry,
      this.props.sortType,
      this.props.dupsAllowed
    );
  };

  handleOnClickFill = e => {
    this.props.fillNumEntry(
      this.props.numberEntry,
      this.props.sortType,
      this.props.dupsAllowed
    );
  };

  handleOnClickInsert = e => {
    this.props.insertNumEntry(
      this.props.numberEntry,
      this.props.sortType,
      this.props.dupsAllowed
    );
  };

  handleOnClickFind = e => {
    this.props.findNumEntry(
      this.props.numberEntry,
      this.props.sortType,
      this.props.dupsAllowed
    );
  };

  handleOnClickDelete = e => {
    this.props.deleteNumEntry(
      this.props.numberEntry,
      this.props.sortType,
      this.props.dupsAllowed
    );
  };

  render() {
    return (
      <div>
        <Button
          color="primary"
          className="button btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#myModal"
          //onClick={this.onOpenModal}
          onClick={this.handleOnClickNew}
        >
          New
        </Button>{" "}
        <div id="myModal" className="modal fade" role="dialog">
          <Modal open={false} onClose={this.onCloseModal} center>
            <h2>Simple centered modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
          </Modal>
        </div>
        <Button
          color="primary"
          className="button"
          onClick={this.handleOnClickFill}
        >
          Fill
        </Button>{" "}
        <Button
          color="primary"
          className="button"
          onClick={this.handleOnClickInsert}
        >
          Insert
        </Button>{" "}
        <Button
          color="primary"
          className="button"
          onClick={this.handleOnClickFind}
        >
          Find
        </Button>{" "}
        <Button
          color="primary"
          className="button"
          onClick={this.handleOnClickDelete}
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
    numberEntry: state.numberEntry,
    sortType: state.sortType,
    dupsAllowed: state.dupsAllowed,
    open: state.open
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      newNumEntry,
      fillNumEntry,
      findNumEntry,
      deleteNumEntry,
      insertNumEntry,
      open
    },
    dispatch
  );
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Buttons);
