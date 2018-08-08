import React, { Component } from "react";
import "../App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Output extends Component {
  renderList() {
    console.log("in renderList");
    console.log(this.props.allEntries);
    return this.props.allEntries.map(entry => {
      return (
        <li key={entry.id}>
          {entry.id} {entry.num}
        </li>
      );
    });
  }

  render() {
    if (this.props.allEntries !== null) {
      return <ul>{this.renderList()}</ul>;
    } else {
      return <div />;
    }
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    allEntries: state.allEntries
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
/*
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ newNumEntry: newNumEntry }, dispatch);
}
*/

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(Output);
