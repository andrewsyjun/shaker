import React, { Component } from "react";

import { Form, FormGroup, Row, Label, Input, Col } from "reactstrap";
import "../App.css";
import { numberEntered } from "../actions/numberEntered";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Entry extends Component {
  handleChange = ev => {
    this.props.numberEntered(ev.target.value);
  };

  render() {
    return (
      <form>
        <div className="form-group row colEntry3 ">
          <label
            htmlFor="inputNumber"
            className="col-sm-4 col-form-label nLabel"
          >
            Number:
          </label>
          <div className="col-sm-8">
            <input
              className="form-control nEntry"
              id="inputNumber"
              name="inputNumber"
              placeholder="enter number"
              //onInput={() => this.props.numberEntered(this)}
              onInput={this.handleChange}
            />
          </div>
        </div>
      </form>
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
  return bindActionCreators({ numberEntered: numberEntered }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Entry);
