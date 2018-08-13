import React, { Component } from "react";

import { Button, ButtonGroup, Row, Col } from "reactstrap";
import "../App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { allowDup } from "../actions/allowDup";

class DupFilter extends Component {
  onRadioBtnClick = (rSelected, ev) => {
    this.props.allowDup(rSelected);
  };

  render() {
    return (
      <Row>
        <Button
          id="option1"
          className="btn btn-primary"
          color="primary"
          onClick={e => this.onRadioBtnClick(1, e)}
          active={this.props.dupsAllowed === 1}
        >
          Dups OK
        </Button>
        <Button
          id="option2"
          className="btn btn-primary "
          color="primary"
          onClick={e => this.onRadioBtnClick(2, e)}
          active={this.props.dupsAllowed === 2}
        >
          No dups
        </Button>
      </Row>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    dupsAllowed: state.dupsAllowed
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ allowDup: allowDup }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DupFilter);
