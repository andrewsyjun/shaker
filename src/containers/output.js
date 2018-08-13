import React, { Component } from "react";
import "../App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Output extends Component {
  renderList() {
    return this.props.allEntries.map(entry => {
      return <li key={entry.id}>{entry.num}</li>;
    });
  }

  render() {
    if (this.props.allEntries !== null) {
      return (
        <div>
          <ul className="container">{this.renderList()}</ul>
        </div>
      );
    } else {
      return <div className="container"> No entries found</div>;
    }
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    allEntries: state.allEntries,
    sortType: state.sortType
  };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(Output);
